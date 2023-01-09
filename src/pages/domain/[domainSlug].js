import { getComponent } from '../../components/components-registry';
import { domainsUrl } from '../api/url';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import { resolveStaticProps } from '../../utils/static-props-resolvers';
import _ from 'lodash';

function DomainPage(props) {
    const { page, data, site, error } = props;

    const DomainLayout = getComponent('DomainLayout');
    if (!DomainLayout) {
        throw new Error(`no page layout matching the layout: ${layout}`);
    }

    return (
            <DomainLayout page={page} site={site} data={data} />
    );
}

export const getServerSideProps = async (context) => {
    const slug = context.params.domainSlug;
    const res = await fetch(`${domainsUrl}/${slug}`);
    const data = await sourcebitDataClient.getData();
    // /demo comes from content/pages/demo.md for dynamic data
    const props = await resolveStaticProps('/domain', data);
    try {
        const data = await res.json();
        return {
            props: {
                ...props,
                data
            }
        };
    } catch (error) {
        return { props: { data: [], error: error.message } };
    }
};

export default withRemoteDataUpdates(DomainPage);

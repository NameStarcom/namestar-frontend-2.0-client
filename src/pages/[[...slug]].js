import React from 'react';
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { resolveStaticPaths } from '../utils/static-paths-resolvers';
import { domainsUrl } from './api/url';
import _, { map } from 'lodash';

function Page(props) {
    const { page, site, domains, count } = props;
    const { layout } = page;

    if (!layout) {
        throw new Error(`page has no layout, page '${props.path}'`);
    }
    const PageLayout = getComponent(layout);
    if (!PageLayout) {
        throw new Error(`no page layout matching the layout: ${layout}`);
    }
    return <PageLayout page={page} site={site} domains={domains} count={count} />;
}

export async function getStaticPaths() {
    // The "data" object is generated by sourcebit.js and cached inside .sourcebit-nextjs-cache.json
    const data = await sourcebitDataClient.getData();
    const paths = resolveStaticPaths(data);
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    // The "data" object is generated by sourcebit.js and cached inside .sourcebit-nextjs-cache.json

    try {
        const data = await sourcebitDataClient.getData();
        const urlPath = '/' + (params.slug || []).join('/');
        const props = await resolveStaticProps(urlPath, data);
        const res = await fetch(`${domainsUrl}?limit=70&orderBy=bin_DESC`, {
            method: 'GET',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const response = await fetch(`${domainsUrl}/count`);
        const count = await response.text();
        const records = await res.json();
        const domains = map(records.rows, (domain) => {
            return {
                id: domain.id,
                name: domain.name,
                price: domain.bin,
                category: domain.topCategory
            };
        });
        return {
            props: {
                ...props,
                count,
                domains
            }
        };
    } catch (e) {
        return {
            props: {
                domains: {
                    status: 'error'
                }
            }
        };
    }
}

export default withRemoteDataUpdates(Page);

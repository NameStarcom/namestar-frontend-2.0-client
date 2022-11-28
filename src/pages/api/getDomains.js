import { domainsUrl } from './url';

export const getDomains = async () => {
    const response = await fetch(domainsUrl);
    return await response.json();
};

const Domains = async (req, res) => {
    try {
        const domains = await getDomains();
        return domains;
    } catch (e) {
        return [];
    }
};

export default Domains;

import whois from 'whois-parsed-v2';
import _ from 'lodash';

const WhoisQuery = async (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    if (req.method === 'POST') {
        if (req.body.data) {
            const results = [];
            if (_.isArray(req.body.data)) {
                await Promise.all(
                    _.map(req.body.data, async ({ name }) => {
                        const domainName = name.toLowerCase();
                        try {
                            const result = await whois.lookup(domainName);
                            results.push({[domainName]: result});
                        } catch (error) {
                            results.push({
                                [domainName]: {
                                    domainName,
                                    error: true,
                                    message: error.message
                                }
                            });
                        }
                    })
                );
            } else {
                await Promise.all(
                    req.body.data.split('\n').map(async (domain) => {
                        try {
                            const result = await whois.lookup(domain);
                            results.push(result);
                        } catch (error) {
                            results.push({
                                domainName: domain,
                                error: true,
                                message: error.message
                            });
                        }
                    })
                );
            }
            res.json(results);
        } else {
            res.json({ status: false, errorCode: 404 });
        }
    } else {
        res.json({ status: false, errorCode: 404 });
    }
};

export default WhoisQuery;

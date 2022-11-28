export const url = `${process.env.NODE_ENV === 'production' ? process.env.NEXT_URL : 'http://localhost:8080'}/api/`;

// export const url = `${process.env.NODE_ENV === 'production' ? process.env.NEXT_URL : process.env.NEXT_URL}`; 
// export const url = `${process.env.NEXT_URL}/api/`;

export const domainsUrl = `${url}domains`;
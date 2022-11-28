import axios from 'axios';
import { useCallback } from 'react';
import { useEffect, useState, useMemo } from 'react';
import _ from 'lodash';
import { domainsUrl } from '../../pages/api/url';

export default function useMyState() {
    const [rows, setRows] = useState([]);
    const [count, setCount] = useState(0);
    const [error, setError] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    const [offset, setOffset] = useState(0);
    const [name, setName] = useState(undefined);
    const orderTitele = 'bin';
    const direction = ['ASC', 'DESC'];
    const orderBy = 'bin_DESC';
    const limit = 20;
    const onChangeOffset = useCallback(
        (patch) => {
            setOffset(patch);
        },
        [offset]
    );
    const onChangeName = useCallback(
        (patch) => {
            setName(patch);
        },
        [name]
    );
    const url = useMemo(
        () => `
    ${domainsUrl}?limit=${limit}&orderBy=${orderBy}&offset=${offset}
    `,
        [limit, orderTitele, orderBy, offset, name]
    );
    const makeFetch = () => {
        setIsLoading(true);
        axios
            .get(url, {
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                params: {
                    filter: { name }
                }
            })
            .then(async (res) => {
                setRows(res.data?.rows);
                setCount(res.data?.count);
            })
            .catch((error) => {
                console.error('error: ', error);
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    useEffect(() => {
        makeFetch();
    }, [url, name]);

    return {
        rows,
        isLoading,
        error,
        offset,
        setOffset: onChangeOffset,
        count,
        name,
        setName: onChangeName
    };
}

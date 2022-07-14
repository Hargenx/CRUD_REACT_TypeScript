import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { Records } from '../interfaces/RecordEntitites';

export const useFetch = <T extends Records>(path: string, options?: {}) => {
    const [records, setRecords] = useState<T[]>([]);
    const [version, setVersion] = useState(+new Date());
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<AxiosError>();

    const url = `${process.env.API_NEST_TYPEORM}/${path}`;

    useEffect(() => {
        const callFetchFunction = async () => {
            setLoading(true);
      try {
            const res = await axios.get<T[]>(url, { params: options });
            setRecords(res.data);
        }catch (e) {
            setError(e as AxiosError);
          }
          setLoading(false);
        };
        callFetchFunction();
    }, [url, options, version]);

    return { records, setVersion, loading, error }
};
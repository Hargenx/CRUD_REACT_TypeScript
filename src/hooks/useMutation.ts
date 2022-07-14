import axios, { AxiosError } from "axios";
import { useState } from "react";
import { Records } from "../interfaces/RecordEntitites";

export type Action<T> = (record: T) => Promise<void>;

export const useMutation = <T extends Records>(path: string, callback?: Function) => {
    const [processing, setProcesing] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>();
    const [error, setError] = useState<AxiosError>();

    const url = `${process.env.API_NEST_TYPEORM}/${path}`;

    const wrap = (fn: Action<T>) => {
        return async (record: T) => {
            setProcesing(true);
            setSuccess(undefined);
            setError(undefined);
            fn(record)
              .then(() => {
                setSuccess(true);
                if (callback) {
                  callback();
                }
              })
              .catch((error: Error) => {
                setSuccess(false);
                setError(error as AxiosError);
              })
              .finally(() => {
                setProcesing(false);
              }); 
            fn(record).then(() => {
                if (callback) {
                    callback();
                }
            })
        }
    }

    const create: Action<T> = wrap(async (record: T) => {
        await axios.post(url, record);
    });

    const update: Action<T> = wrap(async (record: T) => {
        await axios.put(`${url}/${record.id}`, record);
    });

    const apaga: Action<T> = wrap(async (record: T) => {
        await axios.delete(`${url}/${record.id}`);
    });

    return {
        create,
        update,
        apaga,
        processing,
        success,
        error,
        setError,
    };
};
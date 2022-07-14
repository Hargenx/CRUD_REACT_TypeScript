import { AxiosError } from "axios";
import React from "react";
import { IChangeElement } from "../hooks/useForm";
import { Action } from "../hooks/useMutation";

export interface RecordIndexProps<T> {
    ListItem: React.FC<ListItemProps<T>>;
    apiPath: string;
    apiOptions: {};
    FormFields: React.FC<FormFieldsProps<T>>;
    emptyRecord: T;
}

export interface RecordListProps<T> {
    ListItem: React.FC<ListItemProps<T>>;
    records: T[];
    emptyRecord: T;
    activeRecord: T;
    setActiveRecord: Function;
    loading: boolean;
    error?: AxiosError;
}

export interface ListItemProps<T> {
    record: T;
}

export interface RecordMutationsProps<T> {
    FormFields: React.FC<FormFieldsProps<T>>;
    activeRecord: T;
    apiPath: string;
    callback: Function;
}

export interface RecordNewProps<T> {
    FormFields: React.FC<FormFieldsProps<T>>;
    activeRecords: T;
    create: Action<T>;
    success?: boolean;
}

export interface RecordEditProps<T> {
    FormFields: React.FC<FormFieldsProps<T>>;
    activeRecords: T;
    update: Action<T>;
    apaga: Action<T>;
    success?: boolean;
}

export interface RecordFormProps<T> {
    FormFields: React.FC<FormFieldsProps<T>>;
    activeRecords: T;
    submitAction: Action<T>;
    success?: boolean;
}

export interface FormFieldsProps<T> {
    formState: T;
    handleChange: (event: React.ChangeEvent<IChangeElement>) => void
}
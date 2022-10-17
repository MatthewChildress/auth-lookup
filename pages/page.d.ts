import { NextPage } from 'next';
import { ComponentType, ReactElement, ReactNode } from 'react';

/** Adds a type that will extend from NextPage's default interface
 * and allows for custom layouts as needed .
 * 
 * delete from template if no custom layouts are needed*/

export type NextPageWithLayout<P = {}> = NextPage<P> & {
    getLayout?: (_page: ReactElement) => ReactNode;
    layout?: ComponentType;
};
import { ReactElement, ReactNode } from "react";
import { ListProps as AntListProps } from "antd"

export interface ListProps<T> extends AntListProps<T> {
    items: T[];
}

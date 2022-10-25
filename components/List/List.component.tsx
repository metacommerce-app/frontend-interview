import { List as AntList } from "antd";
import { ListProps } from "./List.types";

const List = <T,>({ items, renderItem, ...props }: ListProps<T>) => {
    return (
        <AntList
            {...props}
            dataSource={items}
        />
    );
};

export default List;

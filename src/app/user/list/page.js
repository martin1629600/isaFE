import {useEffect, useState} from "react";
import useListData from "../../../hooks/userListData";

export const tableColumns = [
    {
        name: 'First name',
        selector: (row) => `${row.firstName}`,
        sortable: false
    },
    {
        name: 'Last name',
        selector: (row) => `${row.lastName}`,
        sortable: false
    },
]

export default function UserList(){
    const [pageNumber, setPageNumber] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    const {getData, loading, data} = useListData(`user/get-user-page-list?pageNumber=${pageNumber-1}&pageSize=${pageSize}`);

    useEffect(() => {
        getData(`user/get-user-page-list?pageNumber=${pageNumber-1}&pageSize=${pageSize}`)
    }, [pageSize, pageNumber]);

    const handlePageChange = async (page) => {
        setPageNumber(page);
    }

    const handePerRowsChnage = async (newPerPage, page) => {
        setPageNumber(page);
        setPageSize(newPerPage);
    }
}
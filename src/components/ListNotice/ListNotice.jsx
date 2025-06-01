
import useNotice from "../../hooks/useNotice"
import { Grid, Pagination, Stack } from "@mui/material"
import Notice from "../Notice"
import './ListNotice.scss'
import { useEffect, useState } from "react"

const filterByValue = (array, string) => {
    let resultsArray = []
    array.map((obj) => {
        // destructure your obj to extract the data
        const { content, description, title } = obj;
        if ((content && content.includes(string)) || (description && description.includes(string)) || (title && title.includes(string))) {
            resultsArray.push(obj)
        }
    });
    return resultsArray
};

const ListNotice = ({ searchValue }) => {
    const [filteredNotices, setFilteredNotices] = useState([])
    const { notices, totalPages, handleSubmitPage, pagination, page } = useNotice()


    useEffect(() => {
        console.log(searchValue.replace(/ .*/, ''))
        console.log(filterByValue(notices, searchValue.replace(/ .*/, '')))
        setFilteredNotices(filterByValue(notices, searchValue.replace(/ .*/, '')))
    }, [searchValue])

    return (
        <div className="ListNotice">
            <Grid container spacing={2}>
                {filteredNotices.map((notice) => <Notice key={notice.url} notice={notice} />)}
            </Grid>
            <Stack spacing={2} justifyContent='center' alignItems='center' sx={{ margin: '42px 0', position: 'absolute' }}>
                <Pagination count={pagination} color="primary" page={page} onChange={handleSubmitPage} />
            </Stack>
        </div>
    )
}

export default ListNotice
import React from 'react'

const TableStats = ({ tableProps }) => {
    const getKey = (tableProps) => {
        let data = []
        for (let i in tableProps) {
            data.push({ 'key': i })
        }
        return data
    }
    return (
        <table className='table table-borderless'>
            <tbody>
                <td className='text-secondary'>
                    {
                        getKey(tableProps).map((item, i) => (
                            <tr key={i}>{item.key}</tr>
                        ))
                    }
                </td>
                <td className='text-end text-info'>
                    <tr>{tableProps.id}</tr>
                    <tr>{tableProps.repos}</tr>
                    <tr>{tableProps.gists}</tr>
                    <tr>{tableProps.followers}</tr>
                    <tr>{tableProps.follow}</tr>
                </td>
            </tbody>
        </table>
    )
}

export default TableStats
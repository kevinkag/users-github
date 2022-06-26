import React from 'react'

const TableStats = (props) => {
    return (
        <div className='d-flex otro text-description-sm flex-column p-1'>
            <div className='d-flex flex-row justify-content-between mb-1'>
                <div>id:</div>
                <div className='text-primary'>{props.item.id}</div>
            </div>
            <div className='d-flex flex-row justify-content-between mb-1'>
                <div>repos:</div>
                <div className='text-primary'>{props.item.public_repos}</div>
            </div>
            <div className='d-flex flex-row justify-content-between mb-1'>
                <div>gists:</div>
                <div className='text-primary'>{props.item.public_gists}</div>
            </div>
            <div className='d-flex flex-row justify-content-between mb-1'>
                <div>followers:</div>
                <div className='text-primary'>{props.item.followers}</div>
            </div>
            <div className='d-flex flex-row justify-content-between mb-1'>
                <div>follow:</div>
                <div className='text-primary'>{props.item.following}</div>
            </div>
        </div>
        // <table className='table table-borderless text-description-sm m-1 d-flex flex-column'>
        //     {/* <tr>
        //         <td>id</td>
        //         <td className='text-primary text-end'>{props.item.id}</td>
        //     </tr>
        //     <tr>
        //         <td>repos</td>
        //         <td className='text-primary text-end'>{props.item.public_repos}</td>
        //     </tr>
        //     <tr>
        //         <td>gists</td>
        //         <td className='text-primary text-end'>{props.item.public_gists}</td>
        //     </tr>
        //     <tr>
        //         <td>flws</td>
        //         <td className='text-primary text-end'>{props.item.followers}</td>
        //     </tr>
        //     <tr>
        //         <td>flw</td>
        //         <td className='text-primary text-end'>{props.item.following}</td>
        //     </tr> */}
        //     {/* <td className='text-end text-info'>
        //             <tr>{props.item.id}</tr>
        //             <tr>{props.item.public_repos}</tr>
        //             <tr>{props.item.public_gists}</tr>
        //             <tr>{props.item.followers}</tr>
        //             <tr>{props.item.following}</tr>
        //         </td> */}
        // </table>
    )
}

export default TableStats
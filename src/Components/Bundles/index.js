import React, { useState, useEffect } from 'react';
import SideBar from '../../Common/Sidebar/sidebar';
import Topbar from '../../Common/TopBar/index';
import Button from '@mui/material/Button';
import Loader from '../../Common/Loader/index';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../Bundles/index.scss';
import { FcEditImage } from 'react-icons/fc';
import { IoMdPersonAdd } from 'react-icons/io';
import { Input, Label } from 'reactstrap';

function Bundles() {

    const [categoryName, setCategoryName] = useState('');
    const [bundlesData, setBundlesData] = useState([]);
    const [createBundleModalOpened, setCreateBundleModalOpened] = useState(false);
    const [newBundleCreated, setNewBundleCreated] = useState(false);

    const handleAddBundle = () => {
        setCreateBundleModalOpened(true);
    }

    const createBundle = () => {
        let token = localStorage.getItem('token');
        let url = `http://13.234.29.72:4000/createCategorizedBasket`;
        fetch((url), {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'x-access-token': token
            },
            body: JSON.stringify({ categoryName })
        })
            .then((data) => {
                data.json()
                    .then((response) => {
                        setNewBundleCreated(true)
                        setCreateBundleModalOpened(!createBundleModalOpened)
                        setCategoryName('');
                    })
            })
    }

    const handleAddInfluencer = () => {

    }

    const handleEditImage = () => {

    }

    useEffect(() => {
        let url = `http://13.234.29.72:4000/showCategorizedBasket`;
        fetch(url)
            .then((res) => {
                res.json()
                    .then((data) => {
                        setBundlesData(data)
                    })
            })
    }, [newBundleCreated])

    return (
        <>
            <div className='bundle_container row no-gutters'>
                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2  col-3'>
                    <SideBar />
                </div>
                <div className='bundle_content col-lg-10 col-sm-10 col-md-10 col-xs-10 col-9'>
                    <div className='row no-gutters'>
                        <div className='col-lg-12 col-sm-12 col-md-12 col-xs-12 col-12 '>
                            <Topbar />
                        </div>
                    </div>
                    <div className='row no-gutters main_pane_container'>
                        {bundlesData[0] ?
                            <div className='main_pane_content'>
                                <div className='top_lane'>
                                    <Button className='add_btn' onClick={handleAddBundle}>Create Bundle</Button>
                                    {
                                        createBundleModalOpened === true ?
                                            <div className='overlay'>
                                                <div className='bundle_section row no-gutters'>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                                        <Label>
                                                            Add New Bundle
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12'>
                                                        <Input className='input_bundlename' placeholder='Bundle Name' value={categoryName} onChange={(e) => { setCategoryName(e.target.value) }} />
                                                    </div>
                                                    <div className='btn_lane row no-gutters'>
                                                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6'>
                                                            <Button className='add_bundle_btn' onClick={createBundle}>Create</Button>
                                                        </div>
                                                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6'>
                                                            <Button className='cancel_btn' onClick={() => { setCreateBundleModalOpened(!createBundleModalOpened) }}>Cancel</Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            null
                                    }
                                </div>
                                <div className='middle_main_pane'>
                                    <TableContainer component={Paper} className='table_paper'>
                                        <Table stickyHeader className="table_container" >
                                            <TableHead className='table_head'>
                                                <TableRow className='table_row'>
                                                    <TableCell className='table_head_value_1'>Bundle's Name</TableCell>
                                                    <TableCell className='table_head_value' align="center">Image</TableCell>
                                                    <TableCell className='table_head_value' align="center">Influencers Count</TableCell>
                                                    <TableCell className='table_head_value' align="center"></TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    bundlesData.map((item, index) =>
                                                        <>
                                                            <TableRow className='table_body_row'>
                                                                <TableCell component="th" scope="row" key={item.categoryName} className='table_body_value_1' >
                                                                    {item.categoryName}
                                                                </TableCell>
                                                                <TableCell className='table_body_value' align="center">
                                                                    <img src={`http://13.234.29.72:4000/uploads/${item.image}`} className="category_image" />
                                                                </TableCell>
                                                                <TableCell className='table_body_value' align="center">
                                                                    {item.basketInfluencersCount}
                                                                </TableCell>
                                                                <TableCell className='table_body_value' align="center">
                                                                    <FcEditImage className='table_icons' onClick={handleEditImage} />
                                                                    <IoMdPersonAdd className='table_icons' onClick={handleAddInfluencer} />
                                                                </TableCell>
                                                            </TableRow>
                                                        </>
                                                    )
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                            :
                            <div className='inline_loader'>
                                <Loader />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bundles;
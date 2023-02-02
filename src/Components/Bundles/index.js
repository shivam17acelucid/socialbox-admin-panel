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
    const [username, setUsername] = useState('');
    const [bundlesData, setBundlesData] = useState([]);
    const [createBundleModalOpened, setCreateBundleModalOpened] = useState(false);
    const [editImageModalOpened, setEditImageModalOpened] = useState(false);
    const [addInfluencerModalOpened, setAddInfluencerModalOpened] = useState(false);
    const [newBundleCreated, setNewBundleCreated] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [basketToBeAdded, setBasketToBeAdded] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const [basketToImageAdded, setBasketToImageAdded] = useState('');


    const token = localStorage.getItem('token')

    const handleAddBundle = () => {
        setCreateBundleModalOpened(true);
    }

    const createBundle = () => {
        let url = `http://65.0.110.147:4000/createCategorizedBasket`;
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

    const handleAddInfluencer = (item) => {
        setBasketToBeAdded(item.categoryName)
        setAddInfluencerModalOpened(true);
    }

    const handleEditImage = (item) => {
        setBasketToImageAdded(item.categoryName)
        setEditImageModalOpened(true)
    }

    const fetchBundleDetails = () => {
        let url = `http://65.0.110.147:4000/showCategorizedBasket`;
        fetch(url)
            .then((res) => {
                res.json()
                    .then((data) => {
                        setBundlesData(data)
                    })
            })
    }

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setUsername(query);
        if (query.length > 1) {
            let url = `http://65.0.110.147:4000/filterUsers?username=${query}`
            fetch(url)
                .then((data) => {
                    data.json()
                        .then((res) => {
                            setSuggestions(res)
                        })
                })
            setSuggestionsActive(true);
        } else {
            setSuggestionsActive(false);
        }
    };

    const handleClick = (e) => {
        setUsername(e.target.innerText);
        setSuggestions([]);
        setSuggestionsActive(false);
    };

    const Suggestions = () => {
        return (
            <>
                <div className="suggestions row no-gutters" style={{ textAlign: 'initial' }}>
                    <div className='col-lg-10 col-md-8 col-sm-6 col-xs-6 col-6'>
                        <div style={{
                            margin: '0.313rem', padding: 0, fontFamily: 'Noto Sans',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '1.125rem',
                            lineHeight: '1rem',
                            color: 'rgba(0, 0, 0, 0.7)'
                        }}>Influencers</div>
                        {suggestions.map((suggestion, index) => {
                            return (
                                <div
                                    className={index === suggestionIndex ? "active" : ""}
                                    key={index}
                                    onClick={handleClick}
                                >
                                    {suggestion.username}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    };

    const addInfluencer = (username) => {
        let categoryName = basketToBeAdded;
        let url = `http://65.0.110.147:4000/addInfluencersToBasket`;
        fetch((url), {
            method: 'POST',
            body: JSON.stringify({ username, categoryName }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'x-access-token': token
            }
        })
            .then((res) => {
                res.json()
                    .then((data) => {
                        setUsername('')
                        setAddInfluencerModalOpened(false)
                        // setBasketToBeAdded('')
                    })
            })
    }

    const uploadImage = () => {
        const data = new FormData();
        data.append('image', selectedImage);
        // data.append('file_attachment', selectedImage);
        console.log(data);
        let url = `http://65.0.110.147:4000/addImageToBasket?categoryName=${basketToImageAdded}`;
        fetch((url), {
            method: 'POST',
            body: data,
            headers: {
                'x-access-token': token,
            }
        })
            .then((data) => {
                data.json()
                    .then((response) => {
                        setBasketToImageAdded('')
                        setEditImageModalOpened(false)
                    })
            })
    }

    useEffect(() => {
        fetchBundleDetails();
    }, [newBundleCreated, addInfluencerModalOpened, editImageModalOpened])

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
                        {bundlesData[0] ?
                            <div className='main_pane_content'>
                                <div className='middle_main_pane row no-gutters'>
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
                                                                    <img src={`http://65.0.110.147:4000/uploads/${item.image}`} className="category_image" />
                                                                </TableCell>
                                                                <TableCell className='table_body_value' align="center">
                                                                    {item.basketInfluencersCount}
                                                                </TableCell>
                                                                <TableCell className='table_body_value' align="center">
                                                                    <FcEditImage className='table_icons' onClick={() => { handleEditImage(item) }} />
                                                                    <IoMdPersonAdd className='table_icons' onClick={() => { handleAddInfluencer(item) }} />
                                                                    {
                                                                        editImageModalOpened === true ?
                                                                            basketToImageAdded === item.categoryName ?
                                                                                <div className='overlay'>
                                                                                    <div className='bundle_section row no-gutters' style={{ textAlign: 'initial' }}>
                                                                                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                                                                            <Label>
                                                                                                Edit Basket's Image
                                                                                            </Label>
                                                                                        </div>
                                                                                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12' style={{ marginTop: '1rem' }}>
                                                                                            <Input type='file' onChange={(event) => setSelectedImage(event.target.files[0])} />
                                                                                        </div>
                                                                                        <div className='btn_lane row no-gutters'>
                                                                                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6'>
                                                                                                <Button className='add_bundle_btn' onClick={() => { uploadImage(item) }}>Upload</Button>
                                                                                            </div>
                                                                                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6'>
                                                                                                <Button className='cancel_btn' onClick={() => { setEditImageModalOpened(!editImageModalOpened) }}>Cancel</Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                :
                                                                                null
                                                                            : null
                                                                    }
                                                                    {
                                                                        addInfluencerModalOpened === true ?
                                                                            <div className='overlay'>
                                                                                <div className='bundle_section row no-gutters' style={{ textAlign: 'initial' }}>
                                                                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                                                                        <Label>
                                                                                            Add New Influencer
                                                                                        </Label>
                                                                                    </div>
                                                                                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12'>
                                                                                        <Input className='input_bundlename' placeholder='Influencer username' value={username} onChange={handleChange} />
                                                                                        {suggestionsActive && <Suggestions />}
                                                                                    </div>
                                                                                    <div className='btn_lane row no-gutters'>
                                                                                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6'>
                                                                                            <Button className='add_bundle_btn' onClick={() => { addInfluencer(username) }}>Add</Button>
                                                                                        </div>
                                                                                        <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6'>
                                                                                            <Button className='cancel_btn' onClick={() => { setAddInfluencerModalOpened(!addInfluencerModalOpened) }}>Cancel</Button>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            :
                                                                            null
                                                                    }
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
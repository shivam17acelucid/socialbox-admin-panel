import React, { useState } from 'react';
import SideBar from '../../Common/Sidebar/sidebar';
import Topbar from '../../Common/TopBar/index';
import './index.scss';
import { Input, Label } from 'reactstrap';
import Button from '@mui/material/Button';
import Loader from '../../Common/Loader';

function AddInfluencer() {

    const [hashtag, setHashtag] = useState('');
    const [csvData, setCsvData] = useState([]);
    const [selectedCsv, setSelectedCsv] = useState(null);

    const handleFetchHahstag = () => {
        // let url = `http://localhost:5000/searchbyhashtag?tagname=${hashtag}`;
        // fetch(url)
        //     .then((res) => {
        //         res.json()
        //             .then((data) => {
        //                 console.log(data);
        //             })
        //     })
    }

    const handleFetchOwnerIds = () => {
        // let url = `http://13.234.29.72:4000/getUsername`;
        // fetch(url)
        //     .then((res) => {
        //         res.json()
        //             .then((data) => {
        //                 console.log(data);
        //             })
        //     })
    }

    const handleFetchUsernames = () => {
        // let url = `http://13.234.29.72:4000/getprofiledata`;
        // fetch(url)
        //     .then((res) => {
        //         res.json()
        //             .then((data) => {
        //                 console.log(data);
        //             })
        //     })
    }

    const handleAddInfluencers = () => {
        // let url = `http://13.234.29.72:4000/getInfluencersDetails`;
        // fetch(url)
        //     .then((res) => {
        //         res.json()
        //             .then((data) => {
        //                 console.log(data);
        //             })
        //     })
    }

    const handleAddDetails = () => {
        const data = new FormData();
        data.append('csv', selectedCsv);
        console.log(data);
        let url = `http://13.234.29.72:4000/updateCreatorsDetails`;
        // fetch((url), {
        //     method: 'PUT',
        //     body: data,
        //     headers: { "Content-Type": "multipart/form-data" },
        // })
        //     .then((res) => {
        //         res.json()
        //             .then((data) => {
        //                 console.log(data);
        //             })
        //     })
    }

    return (
        <>
            <div className='add_container row no-gutters'>
                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2  col-3'>
                    <SideBar />
                </div>
                <div className='add_content col-lg-10 col-sm-10 col-md-10 col-xs-10 col-9'>
                    <div className='row no-gutters'>
                        <div className='col-lg-12 col-sm-12 col-md-12 col-xs-12 col-12'>
                            <Topbar />
                        </div>
                    </div>
                    <div className='row no-gutters main_pane_container'>
                        <div className='main_pane_content'>
                            <div className='hashtag_pane col-lg-10 col-md-10 col-sm-12 col-xs-12 col-12 mx-auto'>
                                <div className='pane_title'>
                                    <Label> Add Influencer Using Hashtags</Label>
                                </div>
                                <div className='form'>
                                    <div className='input'>
                                        <Input type='text' value={hashtag} onChange={(e) => { setHashtag(e.target.value) }} placeholder="Add any hashtag" />
                                    </div>
                                    <div className='add_btn'>
                                        <Button className='add_btn' onClick={handleFetchHahstag}>Add</Button>
                                        {/* <Loader /> */}
                                    </div>
                                </div>
                                <div className='btn_pane'>
                                    <div>
                                        <Button className='btn_2' onClick={handleFetchOwnerIds}>Fetch OwnerIds</Button>
                                    </div>
                                    <div>
                                        <Button className='btn_3' onClick={handleFetchUsernames}>Fetch Usernames</Button>
                                    </div>
                                    <div>
                                        <Button className='btn_4' onClick={handleAddInfluencers}>Add Influencer To Database</Button>
                                    </div>
                                </div>
                            </div>
                            <div className='csv_pane col-lg-10 col-md-10 col-sm-12 col-xs-12 col-12 mx-auto'>
                                <div className='pane_title'>
                                    Add Influencer Using CSV File
                                </div>
                                <div className='form'>
                                    <div className='form_pane_1 row no-gutters' style={{ padding: '1rem' }}>
                                        <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12'>
                                            <Label>
                                                Select CSV File
                                            </Label>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12'>
                                            <Input type='file' />
                                        </div>
                                    </div>
                                </div>
                                <div className='btn_pane'>
                                    <Button>Submit</Button>
                                </div>
                            </div>
                            <div className='csv_pane col-lg-10 col-md-10 col-sm-12 col-xs-12 col-12 mx-auto'>
                                <div className='pane_title'>
                                    Add Influencer Details Using CSV File
                                </div>
                                <div className='form'>
                                    <div className='form_pane_1 row no-gutters' style={{ padding: '1rem' }}>
                                        <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12'>
                                            <Label>
                                                Select CSV File
                                            </Label>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12'>
                                            <Input type='file' onChange={(event) => setSelectedCsv(event.target.files[0])} />
                                        </div>
                                    </div>
                                </div>
                                <div className='btn_pane'>
                                    <Button onClick={handleAddDetails}>Submit</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddInfluencer;
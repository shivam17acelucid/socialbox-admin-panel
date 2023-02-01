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
    const [selectedCsvForAddition, setSelectedCsvForAddition] = useState(null);
    const [addBtnClicked, setAddBtnClicked] = useState(false);
    const [fetchBtnClicked, setFetchBtnClicked] = useState(false);
    const [fetchusernameBtnClicked, setFetchusernameBtnClicked] = useState(false);
    const [addDataBtnClicked, setAddDataBtnClicked] = useState(false);
    const [hashtagsFetched, setHashtagsFetched] = useState(false);
    const [ownerIDFetched, setOwnerIDFetched] = useState(false);
    const [usernameFetched, setUsernameFetched] = useState(false);
    const [dataAdded, setDataAdded] = useState(false);
    const [addCsvDataClicked, setAddCsvDataClicked] = useState(false);
    const [csvDataAdded, setCsvDataAdded] = useState(false);
    const [addCsvDetailClicked, setAddCsvDetailClicked] = useState(false);
    const [csvDetailAdded, setCsvDetailAdded] = useState(false);
    const [username, setUsername] = useState('');
    const [addUsernameClicked, setAddUsernameClicked] = useState(false);
    const [usernameAdded, setUsernameAdded] = useState(false);

    const handleFetchHahstag = () => {
        setAddBtnClicked(true);
        setHashtagsFetched(false);
        let url = `http://13.234.29.72:4000/searchbyhashtag?tagname=${hashtag}`;
        fetch(url)
            .then((res) => {
                res.json()
                    .then((data) => {
                        setHashtag('')
                        setHashtagsFetched(true)
                    })
            })
    }

    const handleFetchOwnerIds = () => {
        setFetchBtnClicked(true)
        let url = `http://13.234.29.72:4000/getUsername`;
        fetch(url)
            .then((res) => {
                res.json()
                    .then((data) => {
                        setOwnerIDFetched(true)
                    })
            })
    }

    const handleFetchUsernames = () => {
        setFetchusernameBtnClicked(true)
        let url = `http://13.234.29.72:4000/getprofiledata`;
        fetch(url)
            .then((res) => {
                res.json()
                    .then((data) => {
                        setUsernameFetched(true)
                    })
            })
    }

    const handleAddInfluencers = () => {
        setAddDataBtnClicked(true)
        let url = `http://13.234.29.72:4000/getInfluencersDetails`;
        fetch(url)
            .then((res) => {
                res.json()
                    .then((data) => {
                        setDataAdded(true)
                    })
            })
    }

    const handleAddInfluencerByCsv = () => {
        setAddCsvDataClicked(true)
        const data = new FormData();
        data.append('csv', selectedCsvForAddition);
        let url = `http://13.234.29.72:4000/uploadcreatorcsv`;
        fetch((url), {
            method: 'POST',
            body: data,
        })
            .then((res) => {
                res.json()
                    .then((data) => {
                        setCsvDataAdded(true)
                        setSelectedCsvForAddition(null)
                    })
            })
    }

    const handleAddDetails = () => {
        setAddCsvDetailClicked(true)
        const data = new FormData();
        data.append('csv', selectedCsv);
        let url = `http://13.234.29.72:4000/updateCreatorsDetails`;
        fetch((url), {
            method: 'PUT',
            body: data,
        })
            .then((res) => {
                res.json()
                    .then((data) => {
                        setCsvDetailAdded(true)
                        setSelectedCsv(null)
                    })
            })
    }

    const handleAddUsername = () => {
        setAddUsernameClicked(true)
        let url = `http://13.234.29.72:4000/testingproxies`;
        fetch((url), {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ username })
        })
            .then((res) => {
                res.json()
                    .then((data) => {
                        setUsername('')
                        setUsernameAdded(true)
                    })
            })
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
                                    <div className='add_btn row no-gutters' style={{ alignItems: 'center' }}>
                                        <div className='col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4'>
                                            <Button className='add_btn' onClick={handleFetchHahstag}>Add</Button>
                                        </div>
                                        {
                                            addBtnClicked === true ?
                                                hashtagsFetched === true ?
                                                    null
                                                    :
                                                    <div className='col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4'>Adding..</div>
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                                <div className='btn_pane'>
                                    <div className='row no-gutters' style={{ alignItems: 'center' }}>
                                        <div className='col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4'>
                                            <Button className='btn_2' onClick={handleFetchOwnerIds}>Fetch OwnerIds</Button>
                                        </div>
                                        {
                                            fetchBtnClicked === true ?
                                                ownerIDFetched === true ?
                                                    null
                                                    :
                                                    <div className='col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4'>Fetching..</div>
                                                : null
                                        }
                                    </div>
                                    <div className='row no-gutters' style={{ alignItems: 'center' }}>
                                        <div className='col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4'>
                                            <Button className='btn_3' onClick={handleFetchUsernames}>Fetch Usernames</Button>
                                        </div>
                                        {
                                            fetchusernameBtnClicked === true ?
                                                usernameFetched === true ?
                                                    null
                                                    :
                                                    <div className='col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4'>Fetching..</div>
                                                : null
                                        }
                                    </div>
                                    <div className='row no-gutters' style={{ alignItems: 'center' }}>
                                        <div className='col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4'>
                                            <Button className='btn_4' onClick={handleAddInfluencers}>Add Influencer To Database</Button>
                                        </div>
                                        {
                                            addDataBtnClicked === true ?
                                                dataAdded === true ?
                                                    null
                                                    :
                                                    <div className='col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4'>Adding..</div>
                                                : null
                                        }
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
                                            <Input type='file' onChange={(event) => setSelectedCsvForAddition(event.target.files[0])} />
                                        </div>
                                    </div>
                                </div>
                                <div className='btn_pane row no-gutters' style={{ alignItems: 'center' }}>
                                    <div className='col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4'>
                                        <Button onClick={handleAddInfluencerByCsv}>Submit</Button>
                                    </div>
                                    {
                                        addCsvDataClicked === true ?
                                            csvDataAdded === true ?
                                                null :
                                                <div className='col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4'>Adding...</div>
                                            :
                                            null
                                    }
                                </div>
                                <div className='row no-gutters' style={{ alignItems: 'center', marginLeft: '1rem' }}>
                                    <div className='col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4'>
                                        <Button className='btn_4' onClick={handleAddInfluencers}>Add Influencer To Database</Button>
                                    </div>
                                    {
                                        addDataBtnClicked === true ?
                                            dataAdded === true ?
                                                null
                                                :
                                                <div className='col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4'>Adding..</div>
                                            : null
                                    }
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
                                <div className='btn_pane row no-gutters' style={{ alignItems: 'center' }}>
                                    <div className='col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4'>
                                        <Button onClick={handleAddDetails}>Submit</Button>
                                    </div>
                                    {
                                        addCsvDetailClicked === true ?
                                            csvDetailAdded === true ?
                                                null :
                                                <div className='col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4'>Adding...</div>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            <div className='unique_pane col-lg-10 col-md-10 col-sm-12 col-xs-12 col-12 mx-auto'>
                                <div className='pane_title'>
                                    Add Influencer By Username
                                </div>
                                <div className='form'>
                                    <div className='form_pane_1 row no-gutters' style={{ padding: '1rem', alignItems: 'center' }}>
                                        <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12'>
                                            <Label>
                                                Enter Username
                                            </Label>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-12 col-xs-12 col-12'>
                                            <Input type='text' value={username} onChange={(e) => { setUsername(e.target.value) }} />
                                        </div>
                                    </div>
                                </div>
                                <div className='btn_pane row no-gutters' style={{ alignItems: 'center' }}>
                                    <div className='col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4'>
                                        <Button onClick={handleAddUsername}>Add</Button>
                                    </div>
                                    {
                                        addUsernameClicked === true ?
                                            usernameAdded === true ?
                                                null :
                                                <div className='col-lg-3 col-md-4 col-sm-4 col-xs-4 col-4'>Adding...</div>
                                            :
                                            null
                                    }
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
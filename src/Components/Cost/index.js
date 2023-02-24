import React, { useState, useEffect } from 'react';
import SideBar from '../../Common/Sidebar/sidebar';
import Topbar from '../../Common/TopBar/index';
import { Label, Input } from 'reactstrap';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import './index.scss';
import Button from '@mui/material/Button';

function Cost() {

    const [expandContentReel, setExpandContentReel] = useState(true);
    const [expandContentPost, setExpandContentPost] = useState(false);
    const [expandContentStory, setExpandContentStory] = useState(false);
    const [expandContentSwipeup, setExpandContentSwipeup] = useState(false);
    const [expandContentVideo, setExpandContentVideo] = useState(false);
    const [expandContentIgtv, setExpandContentIgtv] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [username, setUsername] = useState('');

    const [minCostPerFollowerReel, setMinCostPerFollowerReel] = useState(0);
    const [maxCostPerFollowerReel, setMaxCostPerFollowerReel] = useState(0);
    const [minCostPerLikeReel, setMinCostPerLikeReel] = useState(0);
    const [maxCostPerLikeReel, setMaxCostPerLikeReel] = useState(0);
    const [minCostPerCommentReel, setMinCostPerCommentReel] = useState(0);
    const [maxCostPerCommentReel, setMaxCostPerCommentReel] = useState(0);


    const [minCostPerFollowerPost, setMinCostPerFollowerPost] = useState(0);
    const [maxCostPerFollowerPost, setMaxCostPerFollowerPost] = useState(0);
    const [minCostPerLikePost, setMinCostPerLikePost] = useState(0);
    const [maxCostPerLikePost, setMaxCostPerLikePost] = useState(0);
    const [minCostPerCommentPost, setMinCostPerCommentPost] = useState(0);
    const [maxCostPerCommentPost, setMaxCostPerCommentPost] = useState(0);


    const [minCostPerFollowerStory, setMinCostPerFollowerStory] = useState(0);
    const [maxCostPerFollowerStory, setMaxCostPerFollowerStory] = useState(0);
    const [minCostPerLikeStory, setMinCostPerLikeStory] = useState(0);
    const [maxCostPerLikeStory, setMaxCostPerLikeStory] = useState(0);
    const [minCostPerCommentStory, setMinCostPerCommentStory] = useState(0);
    const [maxCostPerCommentStory, setMaxCostPerCommentStory] = useState(0);


    const [minCostPerFollowerSwipeupStory, setMinCostPerFollowerSwipeupStory] = useState(0);
    const [maxCostPerFollowerSwipeupStory, setMaxCostPerFollowerSwipeupStory] = useState(0);
    const [minCostPerLikeSwipeupStory, setMinCostPerLikeSwipeupStory] = useState(0);
    const [maxCostPerLikeSwipeupStory, setMaxCostPerLikeSwipeupStory] = useState(0);
    const [minCostPerCommentSwipeupStory, setMinCostPerCommentSwipeupStory] = useState(0);
    const [maxCostPerCommentSwipeupStory, setMaxCostPerCommentSwipeupStory] = useState(0);


    const [minCostPerFollowerVideo, setMinCostPerFollowerVideo] = useState(0);
    const [maxCostPerFollowerVideo, setMaxCostPerFollowerVideo] = useState(0);
    const [minCostPerLikeVideo, setMinCostPerLikeVideo] = useState(0);
    const [maxCostPerLikeVideo, setMaxCostPerLikeVideo] = useState(0);
    const [minCostPerCommentVideo, setMinCostPerCommentVideo] = useState(0);
    const [maxCostPerCommentVideo, setMaxCostPerCommentVideo] = useState(0);


    const [minCostPerFollowerIgtv, setMinCostPerFollowerIgtv] = useState(0);
    const [maxCostPerFollowerIgtv, setMaxCostPerFollowerIgtv] = useState(0);
    const [minCostPerLikeIgtv, setMinCostPerLikeIgtv] = useState(0);
    const [maxCostPerLikeIgtv, setMaxCostPerLikeIgtv] = useState(0);
    const [minCostPerCommentIgtv, setMinCostPerCommentIgtv] = useState(0);
    const [maxCostPerCommentIgtv, setMaxCostPerCommentIgtv] = useState(0);

    const [basicRateReel, setBasicRateReel] = useState([]);
    const [basicRatePost, setBasicRatePost] = useState([]);
    const [basicRateStory, setBasicRateStory] = useState([]);
    const [basicRateSwipeupStory, setBasicRateSwipeupStory] = useState([]);
    const [basicRateVideo, setBasicRateVideo] = useState([]);
    const [basicRateIgtv, setBasicRateIgtv] = useState([]);

    const [minTotalPostCost, setMinTotalPostCost] = useState(0);
    const [minTotalReelCost, setMinTotalReelCost] = useState(0);
    const [minTotalStoryCost, setMinTotalStoryCost] = useState(0);
    const [minTotalSwipeUpCost, setMinTotalSwipeUpCost] = useState(0);
    const [minTotalVideoCost, setMinTotalVideoCost] = useState(0);
    const [minTotalIgtvCost, setMinTotalIgtvCost] = useState(0);
    const [maxTotalPostCost, setMaxTotalPostCost] = useState(0);
    const [maxTotalReelCost, setMaxTotalReelCost] = useState(0);
    const [maxTotalStoryCost, setMaxTotalStoryCost] = useState(0);
    const [maxTotalSwipeUpCost, setMaxTotalSwipeUpCost] = useState(0);
    const [maxTotalVideoCost, setMaxTotalVideoCost] = useState(0);
    const [maxTotalIgtvCost, setMaxTotalIgtvCost] = useState(0);

    const [basicValuesChanged, setBasicValuesChanged] = useState(false);



    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setUsername(query);
        if (query.length > 1) {
            let url = `http://13.234.125.76:4000/filterUsers?username=${query}`
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

    const handleUpdateCostOfUniqueInfluencer = () => {
        let url = `http://13.234.125.76:4000/setInfluencerCost`;
        fetch((url), {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ username, minTotalReelCost, maxTotalReelCost, minTotalPostCost, maxTotalPostCost, minTotalStoryCost, maxTotalStoryCost, minTotalSwipeUpCost, maxTotalSwipeUpCost, minTotalIgtvCost, maxTotalIgtvCost, minTotalVideoCost, maxTotalVideoCost })
        })
            .then((res) => {
                res.json()
                    .then((data) => {
                        setUsername('');
                        setMinTotalIgtvCost(0);
                        setMaxTotalIgtvCost(0);
                        setMinTotalPostCost(0);
                        setMaxTotalPostCost(0);
                        setMinTotalReelCost(0);
                        setMaxTotalReelCost(0);
                        setMinTotalStoryCost(0);
                        setMaxTotalStoryCost(0);
                        setMinTotalVideoCost(0);
                        setMaxTotalVideoCost(0);
                        setMinTotalSwipeUpCost(0);
                        setMaxTotalSwipeUpCost(0);
                    })
            })
    }

    const handleUpdateReelCost = () => {
        let minCostPer1kFollowersForReel = minCostPerFollowerReel;
        let maxCostper1KFollowersForReel = maxCostPerFollowerReel;
        let minCostPerCommentForReel = minCostPerCommentReel;
        let maxCostperCommentForReel = maxCostPerCommentReel;
        let minCostPerLikeForReel = minCostPerLikeReel;
        let maxCostperLikeForReel = maxCostPerLikeReel;

        let url = `http://13.234.125.76:4000/setCalculateCostForReel`;
        fetch((url), {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ minCostPer1kFollowersForReel, maxCostper1KFollowersForReel, minCostPerCommentForReel, maxCostperCommentForReel, minCostPerLikeForReel, maxCostperLikeForReel })
        })
            .then((res) => {
                res.json()
                    .then((data) => {
                        setBasicValuesChanged(!basicValuesChanged);
                    })
            })
    }

    const handleUpdatePostCost = () => {
        let minCostPer1kFollowersForPosts = minCostPerFollowerPost;
        let maxCostper1KFollowersForPosts = maxCostPerFollowerPost;
        let minCostPerCommentForPosts = minCostPerCommentPost;
        let maxCostperCommentForPosts = maxCostPerCommentPost;
        let minCostPerLikeForPosts = minCostPerLikePost;
        let maxCostperLikeForPosts = maxCostPerLikePost;

        let url = `http://13.234.125.76:4000/setCalculateCostForPosts`;
        fetch((url), {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ minCostPer1kFollowersForPosts, maxCostper1KFollowersForPosts, minCostPerCommentForPosts, maxCostperCommentForPosts, minCostPerLikeForPosts, maxCostperLikeForPosts })
        })
            .then((res) => {
                res.json()
                    .then((data) => {
                        setBasicValuesChanged(!basicValuesChanged);
                    })
            })
    }

    const handleUpdateStoryCost = () => {
        let minCostPer1kFollowersForStory = minCostPerFollowerStory;
        let maxCostper1KFollowersForStory = maxCostPerFollowerStory;
        let minCostPerCommentForStory = minCostPerCommentStory;
        let maxCostperCommentForStory = maxCostPerCommentStory;
        let minCostPerLikeForStory = minCostPerLikeStory;
        let maxCostperLikeForStory = maxCostPerLikeStory;

        let url = `http://13.234.125.76:4000/setCalculateCostForStories`;
        fetch((url), {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ minCostPer1kFollowersForStory, maxCostper1KFollowersForStory, minCostPerCommentForStory, maxCostperCommentForStory, minCostPerLikeForStory, maxCostperLikeForStory })
        })
            .then((res) => {
                res.json()
                    .then((data) => {
                        setBasicValuesChanged(!basicValuesChanged);
                    })
            })
    }

    const handleUpdateSwipeUpCost = () => {
        let minCostPer1kFollowersForSwipeUpStory = minCostPerFollowerSwipeupStory;
        let maxCostper1KFollowersForSwipeUpStory = maxCostPerFollowerSwipeupStory;
        let minCostPerLikeForSwipeUpStory = minCostPerLikeSwipeupStory;
        let maxCostperLikeForSwipeUpStory = maxCostPerLikeSwipeupStory;
        let minCostPerCommentForSwipeUpStory = minCostPerCommentSwipeupStory;
        let maxCostperCommentForSwipeUpStory = maxCostPerCommentSwipeupStory;

        let url = `http://13.234.125.76:4000/setCalculateCostForSwipeupStories`;
        fetch((url), {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ minCostPer1kFollowersForSwipeUpStory, maxCostper1KFollowersForSwipeUpStory, minCostPerLikeForSwipeUpStory, maxCostperLikeForSwipeUpStory, minCostPerCommentForSwipeUpStory, maxCostperCommentForSwipeUpStory })
        })
            .then((res) => {
                res.json()
                    .then((data) => {
                        setBasicValuesChanged(!basicValuesChanged);
                    })
            })
    }

    const handleUpdateVideoCost = () => {
        let minCostPer1kFollowersForVideo = minCostPerFollowerVideo;
        let maxCostper1KFollowersForVideo = maxCostPerFollowerVideo;
        let minCostPerLikeForVideo = minCostPerLikeVideo;
        let maxCostperLikeForVideo = maxCostPerLikeVideo;
        let minCostPerCommentForVideo = minCostPerCommentVideo;
        let maxCostperCommentForVideo = maxCostPerCommentVideo;

        let url = `http://13.234.125.76:4000/setCalculateCostForVideos`;
        fetch((url), {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ minCostPer1kFollowersForVideo, maxCostper1KFollowersForVideo, minCostPerLikeForVideo, maxCostperLikeForVideo, minCostPerCommentForVideo, maxCostperCommentForVideo })
        })
            .then((res) => {
                res.json()
                    .then((data) => {
                        setBasicValuesChanged(!basicValuesChanged);
                    })
            })
    }

    const handleUpdateIgtvCost = () => {
        let minCostPer1kFollowersForIgtv = minCostPerFollowerIgtv;
        let maxCostper1KFollowersForIgtv = maxCostPerFollowerIgtv;
        let minCostPerLikeForIgtv = minCostPerLikeIgtv;
        let maxCostperLikeForIgtv = maxCostPerLikeIgtv;
        let minCostPerCommentForIgtv = minCostPerCommentIgtv;
        let maxCostperCommentForIgtv = maxCostPerCommentIgtv;

        let url = `http://13.234.125.76:4000/setCalculateCostForIgtv`;
        fetch((url), {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({ minCostPer1kFollowersForIgtv, maxCostper1KFollowersForIgtv, minCostPerLikeForIgtv, maxCostperLikeForIgtv, minCostPerCommentForIgtv, maxCostperCommentForIgtv })
        })
            .then((res) => {
                res.json()
                    .then((data) => {
                        setBasicValuesChanged(!basicValuesChanged);
                    })
            })
    }

    const fetchBasicRate = () => {
        let url = `http://13.234.125.76:4000/getBasicRate`;
        fetch(url)
            .then((res) => {
                res.json()
                    .then((data) => {
                        console.log(data);
                        if (data[0]?.costFactorReel) {
                            setMinCostPerFollowerReel(data[0]?.costFactorReel?.minCostPer1kFollowersForReel);
                            setMaxCostPerFollowerReel(data[0]?.costFactorReel?.maxCostper1KFollowersForReel);
                            setMinCostPerLikeReel(data[0]?.costFactorReel?.minCostPerLikeForReel);
                            setMaxCostPerLikeReel(data[0]?.costFactorReel?.maxCostperLikeForReel);
                            setMinCostPerCommentReel(data[0]?.costFactorReel?.minCostPerCommentForReel);
                            setMaxCostPerCommentReel(data[0]?.costFactorReel?.maxCostperCommentForReel);
                            setBasicRateReel([data[0]?.costFactorReel])
                        }

                        if (data[0]?.costFactorPosts) {
                            setMinCostPerFollowerPost(data[0]?.costFactorPosts?.minCostPer1kFollowersForPosts);
                            setMaxCostPerFollowerPost(data[0]?.costFactorPosts?.maxCostper1KFollowersForPosts);
                            setMinCostPerLikePost(data[0]?.costFactorPosts?.minCostPerLikeForPosts);
                            setMaxCostPerLikePost(data[0]?.costFactorPosts?.maxCostperLikeForPosts);
                            setMinCostPerCommentPost(data[0]?.costFactorPosts?.minCostPerCommentForPosts);
                            setMaxCostPerCommentPost(data[0]?.costFactorPosts?.maxCostperCommentForPosts);
                            setBasicRatePost([data[0]?.costFactorPosts])
                        }

                        if (data[0]?.costFactorStories) {
                            setMinCostPerFollowerStory(data[0]?.costFactorStories?.minCostPer1kFollowersForStory);
                            setMaxCostPerFollowerStory(data[0]?.costFactorStories?.maxCostper1KFollowersForStory);
                            setMinCostPerLikeStory(data[0]?.costFactorStories?.minCostPerLikeForStory);
                            setMaxCostPerLikeStory(data[0]?.costFactorStories?.maxCostperLikeForStory);
                            setMinCostPerCommentStory(data[0]?.costFactorStories?.minCostPerCommentForStory);
                            setMaxCostPerCommentStory(data[0]?.costFactorStories?.maxCostperCommentForStory);
                            setBasicRateStory([data[0]?.costFactorStories])
                        }

                        if (data[0]?.costFactorSwipeUp) {
                            setMinCostPerFollowerSwipeupStory(data[0]?.costFactorSwipeUp?.minCostPer1kFollowersForSwipeUpStory);
                            setMaxCostPerFollowerSwipeupStory(data[0]?.costFactorSwipeUp?.maxCostper1KFollowersForSwipeUpStory);
                            setMinCostPerLikeSwipeupStory(data[0]?.costFactorSwipeUp?.minCostPerLikeForSwipeUpStory);
                            setMaxCostPerLikeSwipeupStory(data[0]?.costFactorSwipeUp?.maxCostperLikeForSwipeUpStory);
                            setMinCostPerCommentSwipeupStory(data[0]?.costFactorSwipeUp?.minCostPerCommentForSwipeUpStory);
                            setMaxCostPerCommentSwipeupStory(data[0]?.costFactorSwipeUp?.maxCostperCommentForSwipeUpStory);
                            setBasicRateSwipeupStory([data[0]?.costFactorSwipeUp])
                        }

                        if (data[0]?.costFactorVideo) {
                            setMinCostPerFollowerVideo(data[0]?.costFactorVideo?.minCostPer1kFollowersForVideo);
                            setMaxCostPerFollowerVideo(data[0]?.costFactorVideo?.maxCostper1KFollowersForVideo);
                            setMinCostPerLikeVideo(data[0]?.costFactorVideo?.minCostPerLikeForVideo);
                            setMaxCostPerLikeVideo(data[0]?.costFactorVideo?.maxCostperLikeForVideo);
                            setMinCostPerCommentVideo(data[0]?.costFactorVideo?.minCostPerCommentForVideo);
                            setMaxCostPerCommentVideo(data[0]?.costFactorVideo?.maxCostperCommentForVideo);
                            setBasicRateVideo([data[0]?.costFactorVideo])
                        }

                        if (data[0]?.costFactorIgtv) {
                            setMinCostPerFollowerIgtv(data[0]?.costFactorIgtv?.minCostPer1kFollowersForIgtv);
                            setMaxCostPerFollowerIgtv(data[0]?.costFactorIgtv?.maxCostper1KFollowersForIgtv);
                            setMinCostPerLikeIgtv(data[0]?.costFactorIgtv?.minCostPerLikeForIgtv);
                            setMaxCostPerLikeIgtv(data[0]?.costFactorIgtv?.maxCostperLikeForIgtv);
                            setMinCostPerCommentIgtv(data[0]?.costFactorIgtv?.minCostPerCommentForIgtv);
                            setMaxCostPerCommentIgtv(data[0]?.costFactorIgtv?.maxCostperCommentForIgtv);
                            setBasicRateIgtv([data[0]?.costFactorIgtv])
                        }
                    })
            })
    }

    useEffect(() => {
        fetchBasicRate();
    }, [basicValuesChanged])

    return (
        <>
            <div className='cost_container row no-gutters'>
                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2  col-3'>
                    <SideBar />
                </div>
                <div className='cost_content col-lg-10 col-sm-10 col-md-10 col-xs-10 col-9'>
                    <div className='row no-gutters'>
                        <div className='col-lg-12 col-sm-12 col-md-12 col-xs-12 col-12 '>
                            <Topbar />
                        </div>
                    </div>
                    <div className='main_pane_container'>
                        <div className='main_pane_content row no-gutters'>
                            <div className='form_container col-lg-10 col-md-12 col-sm-12 col-xs-12 col-12 mx-auto'>
                                <div className='row no-gutters align-items-center justify-content-center'>
                                    <div className='form_title col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6'>
                                        Basic Cost Of Reel
                                    </div>
                                    {
                                        expandContentReel === true ?
                                            <div className='col-lg-5 col-md-5 col-sm-5 col-xs-5 col-3 justify-content-end' style={{ display: 'flex' }}>
                                                <AiFillCaretUp onClick={() => setExpandContentReel(false)} />
                                            </div>
                                            :
                                            <div className='col-lg-5 col-md-5 col-sm-5 col-xs-5 col-3 justify-content-end' style={{ display: 'flex' }}>
                                                <AiFillCaretDown onClick={() => setExpandContentReel(true)} />
                                            </div>
                                    }
                                </div>
                                {
                                    expandContentReel === true ?
                                        basicRateReel.map((item) =>
                                            <div className='form'>
                                                <div className='form_pane_1 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per 1K Followers
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPer1kFollowersForReel} onChange={(e) => { setMinCostPerFollowerReel(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per 1K Followers
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostper1KFollowersForReel} onChange={(e) => { setMaxCostPerFollowerReel(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='form_pane_2 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per Like
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPerLikeForReel} onChange={(e) => { setMinCostPerLikeReel(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per Like
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostperLikeForReel} onChange={(e) => { setMaxCostPerLikeReel(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='form_pane_3 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per Comment
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPerCommentForReel} onChange={(e) => { setMinCostPerCommentReel(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per Comment
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostperCommentForReel} onChange={(e) => { setMaxCostPerCommentReel(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='update_btn_pane'>
                                                    <Button className='update_btn' onClick={handleUpdateReelCost}>Update</Button>
                                                </div>
                                            </div>
                                        )
                                        :
                                        null
                                }

                            </div>
                            <div className='form_container col-lg-10 col-md-12 col-sm-12 col-xs-12 col-12 mx-auto'>
                                <div className='row no-gutters align-items-center justify-content-center'>
                                    <div className='form_title col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6'>
                                        Basic Cost Of Post
                                    </div>
                                    {
                                        expandContentPost === true ?
                                            <div className='col-lg-5 col-md-5 col-sm-5 col-xs-5 col-3 justify-content-end' style={{ display: 'flex' }}>
                                                <AiFillCaretUp onClick={() => setExpandContentPost(false)} />
                                            </div>
                                            :
                                            <div className='col-lg-5 col-md-5 col-sm-5 col-xs-5 col-3 justify-content-end' style={{ display: 'flex' }}>
                                                <AiFillCaretDown onClick={() => setExpandContentPost(true)} />
                                            </div>
                                    }
                                </div>
                                {
                                    expandContentPost === true ?
                                        basicRatePost.map((item) =>
                                            <div className='form'>
                                                <div className='form_pane_1 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per 1K Followers
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPer1kFollowersForPosts} onChange={(e) => { setMinCostPerFollowerPost(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per 1K Followers
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostper1KFollowersForPosts} onChange={(e) => { setMaxCostPerFollowerPost(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='form_pane_2 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per Like
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPerLikeForPosts} onChange={(e) => { setMinCostPerLikePost(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per Like
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostperLikeForPosts} onChange={(e) => { setMaxCostPerLikePost(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='form_pane_3 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per Comment
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPerCommentForPosts} onChange={(e) => { setMinCostPerCommentPost(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per Comment
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostperCommentForPosts} onChange={(e) => { setMaxCostPerCommentPost(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='update_btn_pane'>
                                                    <Button className='update_btn' onClick={handleUpdatePostCost}>Update</Button>
                                                </div>
                                            </div>
                                        )
                                        :
                                        null
                                }
                            </div>
                            <div className='form_container col-lg-10 col-md-12 col-sm-12 col-xs-12 col-12 mx-auto'>
                                <div className='row no-gutters align-items-center justify-content-center'>
                                    <div className='form_title col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6'>
                                        Basic Cost Of Story
                                    </div>
                                    {
                                        expandContentStory === true ?
                                            <div className='col-lg-5 col-md-5 col-sm-5 col-xs-5 col-3 justify-content-end' style={{ display: 'flex' }}>
                                                <AiFillCaretUp onClick={() => setExpandContentStory(false)} />
                                            </div>
                                            :
                                            <div className='col-lg-5 col-md-5 col-sm-5 col-xs-5 col-3 justify-content-end' style={{ display: 'flex' }}>
                                                <AiFillCaretDown onClick={() => setExpandContentStory(true)} />
                                            </div>
                                    }
                                </div>
                                {
                                    expandContentStory === true ?
                                        basicRateStory.map((item) =>
                                            <div className='form'>
                                                <div className='form_pane_1 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per 1K Followers
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPer1kFollowersForStory} onChange={(e) => { setMinCostPerFollowerStory(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per 1K Followers
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostper1KFollowersForStory} onChange={(e) => { setMaxCostPerFollowerStory(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='form_pane_2 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per Like
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPerLikeForStory} onChange={(e) => { setMinCostPerLikeStory(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per Like
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostperLikeForStory} onChange={(e) => { setMaxCostPerLikeStory(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='form_pane_3 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per Comment
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPerCommentForStory} onChange={(e) => { setMinCostPerCommentStory(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per Comment
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostperCommentForStory} onChange={(e) => { setMaxCostPerCommentStory(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='update_btn_pane'>
                                                    <Button className='update_btn' onClick={handleUpdateStoryCost}>Update</Button>
                                                </div>
                                            </div>
                                        )
                                        :
                                        null
                                }

                            </div>
                            <div className='form_container col-lg-10 col-md-12 col-sm-12 col-xs-12 col-12 mx-auto'>
                                <div className='row no-gutters align-items-center justify-content-center'>
                                    <div className='form_title col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6'>
                                        Basic Cost Of Swipe up Story
                                    </div>
                                    {
                                        expandContentSwipeup === true ?
                                            <div className='col-lg-5 col-md-5 col-sm-5 col-xs-5 col-3 justify-content-end' style={{ display: 'flex' }}>
                                                <AiFillCaretUp onClick={() => setExpandContentSwipeup(false)} />
                                            </div>
                                            :
                                            <div className='col-lg-5 col-md-5 col-sm-5 col-xs-5 col-3 justify-content-end' style={{ display: 'flex' }}>
                                                <AiFillCaretDown onClick={() => setExpandContentSwipeup(true)} />
                                            </div>
                                    }
                                </div>
                                {
                                    expandContentSwipeup === true ?
                                        basicRateSwipeupStory.map((item) =>
                                            <div className='form'>
                                                <div className='form_pane_1 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per 1K Followers
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPer1kFollowersForSwipeUpStory} onChange={(e) => { setMinCostPerFollowerSwipeupStory(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per 1K Followers
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostper1KFollowersForSwipeUpStory} onChange={(e) => { setMaxCostPerFollowerSwipeupStory(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='form_pane_2 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per Like
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPerLikeForSwipeUpStory} onChange={(e) => { setMinCostPerLikeSwipeupStory(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per Like
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostperLikeForSwipeUpStory} onChange={(e) => { setMaxCostPerLikeSwipeupStory(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='form_pane_3 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per Comment
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPerCommentForSwipeUpStory} onChange={(e) => { setMinCostPerCommentSwipeupStory(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per Comment
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostperCommentForSwipeUpStory} onChange={(e) => { setMaxCostPerCommentSwipeupStory(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='update_btn_pane'>
                                                    <Button className='update_btn' onClick={handleUpdateSwipeUpCost}>Update</Button>
                                                </div>
                                            </div>
                                        )
                                        :
                                        null
                                }

                            </div>
                            <div className='form_container col-lg-10 col-md-12 col-sm-12 col-xs-12 col-12 mx-auto'>
                                <div className='row no-gutters align-items-center justify-content-center'>
                                    <div className='form_title col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6'>
                                        Basic Cost Of Video
                                    </div>
                                    {
                                        expandContentVideo === true ?
                                            <div className='col-lg-5 col-md-5 col-sm-5 col-xs-5 col-3 justify-content-end' style={{ display: 'flex' }}>
                                                <AiFillCaretUp onClick={() => setExpandContentVideo(false)} />
                                            </div>
                                            :
                                            <div className='col-lg-5 col-md-5 col-sm-5 col-xs-5 col-3 justify-content-end' style={{ display: 'flex' }}>
                                                <AiFillCaretDown onClick={() => setExpandContentVideo(true)} />
                                            </div>
                                    }
                                </div>
                                {
                                    expandContentVideo === true ?
                                        basicRateVideo.map((item) =>
                                            <div className='form'>
                                                <div className='form_pane_1 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per 1K Followers
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPer1kFollowersForVideo} onChange={(e) => { setMinCostPerFollowerVideo(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per 1K Followers
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostper1KFollowersForVideo} onChange={(e) => { setMaxCostPerFollowerVideo(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='form_pane_2 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per Like
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPerLikeForVideo} onChange={(e) => { setMinCostPerLikeVideo(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per Like
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostperLikeForVideo} onChange={(e) => { setMaxCostPerLikeVideo(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='form_pane_3 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per Comment
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPerCommentForVideo} onChange={(e) => { setMinCostPerCommentVideo(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per Comment
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostperCommentForVideo} onChange={(e) => { setMaxCostPerCommentVideo(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='update_btn_pane'>
                                                    <Button className='update_btn' onClick={handleUpdateVideoCost}>Update</Button>
                                                </div>
                                            </div>
                                        )
                                        :
                                        null
                                }

                            </div>
                            <div className='form_container col-lg-10 col-md-12 col-sm-12 col-xs-12 col-12 mx-auto'>
                                <div className='row no-gutters align-items-center justify-content-center'>
                                    <div className='form_title col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6'>
                                        Basic Cost Of Igtv
                                    </div>
                                    {
                                        expandContentIgtv === true ?
                                            <div className='col-lg-5 col-md-5 col-sm-5 col-xs-5 col-3 justify-content-end' style={{ display: 'flex' }}>
                                                <AiFillCaretUp onClick={() => setExpandContentIgtv(false)} />
                                            </div>
                                            :
                                            <div className='col-lg-5 col-md-5 col-sm-5 col-xs-5 col-3 justify-content-end' style={{ display: 'flex' }}>
                                                <AiFillCaretDown onClick={() => setExpandContentIgtv(true)} />
                                            </div>
                                    }
                                </div>
                                {
                                    expandContentIgtv === true ?
                                        basicRateIgtv.map((item) =>
                                            <div className='form'>
                                                <div className='form_pane_1 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per 1K Followers
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPer1kFollowersForIgtv} onChange={(e) => { setMinCostPerFollowerIgtv(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per 1K Followers
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostper1KFollowersForIgtv} onChange={(e) => { setMaxCostPerFollowerIgtv(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='form_pane_2 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per Like
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPerLikeForIgtv} onChange={(e) => { setMinCostPerLikeIgtv(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per Like
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostperLikeForIgtv} onChange={(e) => { setMaxCostPerLikeIgtv(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='form_pane_3 row no-gutters'>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Minimum Cost per Comment
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.minCostPerCommentForIgtv} onChange={(e) => { setMinCostPerCommentIgtv(e.target.value) }} />
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Label>
                                                            Maximum Cost per Comment
                                                        </Label>
                                                    </div>
                                                    <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                                        <Input type='number' defaultValue={item.maxCostperCommentForIgtv} onChange={(e) => { setMaxCostPerCommentIgtv(e.target.value) }} />
                                                    </div>
                                                </div>
                                                <div className='update_btn_pane'>
                                                    <Button className='update_btn' onClick={handleUpdateIgtvCost}>Update</Button>
                                                </div>
                                            </div>
                                        )
                                        :
                                        null
                                }

                            </div>
                            <div className='form_container col-lg-10 col-md-12 col-sm-12 col-xs-12 col-12 mx-auto unique_cost'>
                                <div className='form_title col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6'>
                                    Set Cost of Unique Influencer
                                </div>
                                <div className='form'>
                                    <div className='form_pane_1 row no-gutters'>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Label>
                                                Add Influencer
                                            </Label>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Input type='text' placeholder='Influencer username' value={username} onChange={handleChange} className='dropdown_input' />
                                            {suggestionsActive && <Suggestions />}
                                        </div>
                                    </div>
                                    <div className='form_pane_2 row no-gutters'>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Label>
                                                Minimum Cost For Reel
                                            </Label>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Input type='number' value={minTotalReelCost} onChange={(e) => { setMinTotalReelCost(e.target.value) }} />
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Label>
                                                Maximum Cost For Reel
                                            </Label>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Input type='number' value={maxTotalReelCost} onChange={(e) => { setMaxTotalReelCost(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='form_pane_2 row no-gutters'>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Label>
                                                Minimum Cost for Post
                                            </Label>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Input type='number' value={minTotalPostCost} onChange={(e) => { setMinTotalPostCost(e.target.value) }} />
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Label>
                                                Maximum Cost for Post
                                            </Label>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Input type='number' value={maxTotalPostCost} onChange={(e) => { setMaxTotalPostCost(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='form_pane_2 row no-gutters'>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Label>
                                                Minimum Cost For Story
                                            </Label>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Input type='number' value={minTotalStoryCost} onChange={(e) => { setMinTotalStoryCost(e.target.value) }} />
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Label>
                                                Maximum Cost For Story
                                            </Label>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Input type='number' value={maxTotalStoryCost} onChange={(e) => { setMaxTotalStoryCost(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='form_pane_2 row no-gutters'>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Label>
                                                Minimum Cost For Swipeup Story
                                            </Label>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Input type='number' value={minTotalSwipeUpCost} onChange={(e) => { setMinTotalSwipeUpCost(e.target.value) }} />
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Label>
                                                Maximum Cost For Swipeup Story
                                            </Label>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Input type='number' value={maxTotalSwipeUpCost} onChange={(e) => { setMaxTotalSwipeUpCost(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='form_pane_2 row no-gutters'>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Label>
                                                Minimum Cost For Video
                                            </Label>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Input type='number' value={minTotalVideoCost} onChange={(e) => { setMinTotalVideoCost(e.target.value) }} />
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Label>
                                                Maximum Cost For Video
                                            </Label>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Input type='number' value={maxTotalVideoCost} onChange={(e) => { setMaxTotalVideoCost(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='form_pane_2 row no-gutters'>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Label>
                                                Minimum Cost For Igtv
                                            </Label>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Input type='number' value={minTotalIgtvCost} onChange={(e) => { setMinTotalIgtvCost(e.target.value) }} />
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Label>
                                                Maximum Cost For Igtv
                                            </Label>
                                        </div>
                                        <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6'>
                                            <Input type='number' value={maxTotalIgtvCost} onChange={(e) => { setMaxTotalIgtvCost(e.target.value) }} />
                                        </div>
                                    </div>
                                    <div className='update_btn_pane'>
                                        <Button className='update_btn' onClick={handleUpdateCostOfUniqueInfluencer}>Update</Button>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='form_container col-lg-10 col-md-12 col-sm-12 col-xs-12 col-12 mx-auto'>
                                <div className='form_title col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6'>
                                    Set Cost with CSV file
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cost;
import React from 'react';
import SideBar from '../../Common/Sidebar/sidebar';
import Topbar from '../../Common/TopBar/index';
import Button from '@mui/material/Button';
import Loader from '../../Common/Loader/index';
import '../Bundles/index.scss';

function Bundles() {
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
                        <div className='main_pane_content'>
                            <div className='top_lane'>
                                <Button className='add_btn'>Create Bundle</Button>
                            </div>
                            <div className='middle_main_pane'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bundles;
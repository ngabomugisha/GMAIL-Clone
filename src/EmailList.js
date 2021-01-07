
import React from 'react';
import './EmailList.css';
import { Checkbox, IconButton } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import PeopleIcon from '@material-ui/icons/People';
import InboxIcon from '@material-ui/icons/Inbox';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from './Section';
import EmailRow from './EmailRow';

function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    <IconButton>
                        <RedoIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon/>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon/>
                    </IconButton>
                    <IconButton>
                        <SettingsIcon/>
                    </IconButton>
                </div>
            </div>
                <div className="emailList__sections">
                    <Section Icon={InboxIcon} title='Primary' color='red' selected /> 
                    <Section Icon={PeopleIcon} title='Social' color='#1A73E8' /> 
                    <Section Icon={LocalOfferIcon} title='Pormotions' color='green' /> 
                </div>
                <div className="emailList__list">
                    <EmailRow 
                    id = {1}
                    title="Robert"
                    subject="Hey man this is a remainder"
                    description="This is a Gmail Clone all built with ReactJS, REDUX, Material-UI"
                    time="23h39"
                    />
                    <EmailRow 
                    id = {1}
                    title="Robert"
                    subject="Hey man don't forget this"
                    description="This is a Gmail Clone"
                    time="23h39"
                    />
                </div>
        </div>
    );
}

export default EmailList

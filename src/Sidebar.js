import {
    Chat,
    EmojiFlags,
    ExpandMoreOutlined,
    LocalHospital,
    People,
    Storefront,
    VideoLibrary
} from '@material-ui/icons'
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow
                src="https://www.tekcrispy.com/wp-content/uploads/2018/10/avatar.png"
                title="John Carl" />
            <SidebarRow
                Icon={LocalHospital}
                title="Covid19" />
            <SidebarRow Icon={EmojiFlags} title="Pages" />
            <SidebarRow Icon={People} title="Friends" />
            <SidebarRow Icon={Chat} title="Messenger" />
            <SidebarRow Icon={Storefront} title="Marketplace" />
            <SidebarRow Icon={VideoLibrary} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />

        </div>
    )
}

export default Sidebar

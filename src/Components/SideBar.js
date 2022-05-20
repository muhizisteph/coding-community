import React from 'react'
import index from '../index.css'
import styled from 'styled-components'
import { FiberManualRecord, Create,
    InsertComment,
    Inbox,
    Drafts,
    BookmarkBorder,
    PeopleAlt,
    Apps,
    FileCopy,
    ExpandLess,
    ExpandMore,
    Add } from '@material-ui/icons'
import CreateIcon from '@material-ui/icons/Create'
import SideBarOption from './SideBarOption'
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from '../firebase'

function SideBar() {

    const [channels, loading, error] = useCollection(db.collection("rooms"));

  return (
    <SideBarContainer>
        <SideBarHeader>
            <SideBarInfo>
                <h2>Coding Community</h2>
                <h3>
                    <FiberManualRecord />
                    Muhizi Stephane
                </h3>
            </SideBarInfo>
            <CreateIcon />
        </SideBarHeader>

        <SideBarOption Icon={InsertComment} title="Threads" />
        <SideBarOption Icon={Inbox} title="Mentions & reactions" />
        <SideBarOption Icon={Drafts} title="Saved items" />
        <SideBarOption Icon={BookmarkBorder} title="Channel browser" />
        <SideBarOption Icon={PeopleAlt} title="People & user groups" />
        <SideBarOption Icon={Apps} title="Apps" />
        <SideBarOption Icon={FileCopy} title="File browser" />
        <SideBarOption Icon={ExpandLess} title="Show less" />

          <hr />

        <SideBarOption Icon={ExpandMore} title="Channels" />

           <hr />


<SideBarOption Icon={Add} title="Add Channel" addChannelOption />

{channels?.docs.map(doc => (
        <SideBarOption key={doc.id} addChannelOption title={doc.data().name} />
      ))}


    </SideBarContainer>

  )
}

export default SideBar

const SideBarContainer = styled.div`
color: white;
background-color: var(--primary-color);
flex: 0.3;
border-top: 1px solid var(--line-color);
max-width: 260px;
margin-top: 60px;

> hr {
    border: 1px solid var(--line-color);
    margin-top: 10px;
    margin-bottom: 10px;

}
`;

const SideBarHeader = styled.div`
display: flex;
border-bottom: 1px solid var(--line-color);
padding: 13px;

> .MuiSvgIcon-root {
    padding: 8px;
    color: var(--line-color);
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
}
`;

const SideBarInfo = styled.div`
flex: 1;

> h2{
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 5px;
}

>h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
}
> h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-right: 2px;
    margin-top: 2px;
    color: green;
}
`;

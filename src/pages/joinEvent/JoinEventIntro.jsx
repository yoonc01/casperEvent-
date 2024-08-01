import React from 'react';
import DailyComment from '@/pages/joinEvent/DailyComment';
import CommentIndex from '@/pages/joinEvent/commentList/CommentIndex';
import JoinEventIntroMain from '@/pages/joinEvent/JoinEventIntroMain';
import WorldCup from '@/pages/joinEvent/WorldCup';

function JoinEventIntro() {
  return (
    <>
      <JoinEventIntroMain />
      <WorldCup />
      <div className="bg-gradient-lightblue-white-vertical px-[240px] py-[115px]">
        <DailyComment />
        <CommentIndex />
      </div>
    </>
  );
}

export default JoinEventIntro;

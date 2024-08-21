import React from 'react';
import EventIntroMain from '@/pages/eventIntro/EventIntroMain';
import EventIntroNav from '@/pages/eventIntro/EventIntroNav';
import EventIntroRewards from '@/pages/eventIntro/EventIntroRewards';
import { animationVariants } from '@/styles/FramerMotion';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function EventIntro() {
  return (
    <div>
      <Helmet>
        <title>캐스퍼 이벤트 소개</title>
        <meta
          name="description"
          content="캐스퍼 EV를 받을 수 있는 이벤트에 대해 자세히 알아보세요. 이벤트 참여 방법과 다양한 보상을 소개합니다."
        />
        <meta property="og:url" content="https://casper-event.store/" />
        <meta property="og:title" content="캐스퍼 이벤트 소개" />
        <meta
          property="og:description"
          content="캐스퍼 EV를 받을 수 있는 이벤트에 참여해보세요!"
        />
        <meta
          property="og:image"
          content="https://softeer4-team8.s3.ap-northeast-2.amazonaws.com/OGImage.png"
        />
      </Helmet>
      <EventIntroMain />
      <div className="bg-gradient-lightblue-white-vertical mt-[1px]">
        <EventIntroNav />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={animationVariants}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
            delay: 0.1,
          }}
        >
          <EventIntroRewards />
        </motion.div>
      </div>
    </div>
  );
}

export default EventIntro;

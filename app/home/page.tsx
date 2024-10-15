'use client';

import React from 'react';
import { Container, Grid, Card, Text, Button, Spacer } from '@nextui-org/react';
import Header from '../../components/home/header';
import Banner from '../../components/home/Banner';
import { PastorInfo, WorshipTimes, OtherInfo } from '../../components/home/worshipinfo';
import GroupNavigation from '../../components/home/sogroup';
import Gallery from '../../components/home/gallery';
import ProfileNavigation from '../../components/home/profile';

const ChurchHome: React.FC = () => {
  const groups = [
    { id: '1', name: '여름수련회준비', imageUrl: '/images/group1.jpg', role: '총무' },
    { id: '2', name: '가브리엘', imageUrl: '/images/group2.jpg', role: '3부찬양대 싱어' },
    { id: '3', name: '더드림', imageUrl: '/images/group3.jpg', role: '3부찬양대 싱어' },
    { id: '4', name: '중등부', imageUrl: '/images/group4.jpg', role: '인도자' },
    { id: '5', name: '믿음마을', imageUrl: '/images/group5.jpg', role: '리더' },
    { id: '6', name: '믿음마을임원', imageUrl: '/images/group6.jpg', role: '총무' },
    { id: '7', name: '추가', imageUrl: '/images/add.jpg' },
  ];

  const galleryImages = [
    { src: '/images/worship1.jpg', alt: '1주 예배', week: '1주 예배', time: '오전 9:55 시작' },
    { src: '/images/worship2.jpg', alt: '2주 예배', week: '2주 예배', time: '오전 11:55 시작' },
    { src: '/images/worship3.jpg', alt: '3주 예배', week: '3주 예배', time: '오전 9:55 시작' },
  ];

  return (
    <Container fluid css={{ backgroundColor: '$background', minHeight: '100vh', padding: 0 }}>
      <Header 
        churchName="서현교회" 
        denomination="대한예수교장로회"
      />

      <Container lg css={{ padding: '$lg' }}>
        <Spacer y={1.5} />

        <Banner year="2024" message="소망은 주께 있나이다" verse="시 39:7" />

        <Spacer y={2} />

        <Grid container gap={2}>
          <Grid xs={12} sm={4}>
            <Card>
              <Card.Body>
                <PastorInfo
                  pastorName="이상화 목사님"
                  pastorRole="서현교회 담임목사님"
                  pastorImageUrl="/담임목사님사진.jpeg"
                />
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={4}>
            <Card>
              <Card.Body>
                <WorshipTimes
                  mainWorshipTimes={[
                    { day: '1부 예배', time: '오전 9:55' },
                    { day: '2부 예배', time: '오전 11:55' },
                    { day: '3부 예배', time: '오후 1:30' },
                    { day: '주일오후예배', time: '오후 3:20' },
                  ]}
                  wednesdayWorshipTime="오후 7:30"
                  fridayWorshipTime="오후 7:30"
                  dawnWorshipTimes={{ weekday: '오전 5:30', weekend: '오전 6:00' }}
                />
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={4}>
            <Card>
              <Card.Body>
                <OtherInfo locationUrl="/map-placeholder.jpg" />
              </Card.Body>
            </Card>
          </Grid>
        </Grid>

        <Spacer y={2} />

        <Card>
          <Card.Body>
            <GroupNavigation groups={groups} />
          </Card.Body>
        </Card>

        <Spacer y={2} />

        <Card>
          <Card.Header>
            <Text h3>예배</Text>
            <Button auto light icon={<Text size="$2xl">+</Text>} />
          </Card.Header>
          <Card.Body>
            <Gallery images={galleryImages} />
          </Card.Body>
        </Card>

        <Spacer y={2} />
      </Container>
    </Container>
  );
};

export default ChurchHome;
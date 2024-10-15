import React from 'react';
import { Card, Avatar, Text, Grid, Spacer } from '@nextui-org/react';
import { FiCalendar, FiClock, FiSun, FiMapPin } from 'react-icons/fi';

interface PastorInfoProps {
  pastorName: string;
  pastorRole: string;
  pastorImageUrl: string;
}

const PastorInfo: React.FC<PastorInfoProps> = ({ pastorName, pastorRole, pastorImageUrl }) => (
  <Card css={{ bg: '$blue50', p: '$6', alignItems: 'center', textAlign: 'center' }}>
    <Avatar
      src={pastorImageUrl}
      css={{ size: '$32' }}
      bordered
      color="primary"
    />
    <Spacer y={1} />
    <Text h3 size="$xl">{pastorName}</Text>
    <Text color="$accents7">{pastorRole}</Text>
  </Card>
);

interface WorshipTimesProps {
  mainWorshipTimes: { day: string; time: string }[];
  wednesdayWorshipTime: string;
  fridayWorshipTime: string;
  dawnWorshipTimes: { weekday: string; weekend: string };
}

const WorshipTimes: React.FC<WorshipTimesProps> = ({ mainWorshipTimes, wednesdayWorshipTime, fridayWorshipTime, dawnWorshipTimes }) => (
  <Card css={{ p: '$6' }}>
    <Grid.Container gap={2}>
      <Grid xs={12}>
        <Text h4 css={{ d: 'flex', ai: 'center' }}><FiCalendar /><Spacer x={0.5} />주일예배</Text>
      </Grid>
      {mainWorshipTimes.map((worship, index) => (
        <Grid xs={12} key={index}>
          <Text size="$sm">{`${worship.day}: ${worship.time}`}</Text>
        </Grid>
      ))}
      <Grid xs={12}>
        <Text h4 css={{ d: 'flex', ai: 'center' }}><FiClock /><Spacer x={0.5} />수요예배</Text>
      </Grid>
      <Grid xs={12}>
        <Text size="$sm">{wednesdayWorshipTime}</Text>
      </Grid>
      <Grid xs={12}>
        <Text h4 css={{ d: 'flex', ai: 'center' }}><FiClock /><Spacer x={0.5} />금요예배</Text>
      </Grid>
      <Grid xs={12}>
        <Text size="$sm">{fridayWorshipTime}</Text>
      </Grid>
      <Grid xs={12}>
        <Text h4 css={{ d: 'flex', ai: 'center' }}><FiSun /><Spacer x={0.5} />새벽기도회</Text>
      </Grid>
      <Grid xs={12}>
        <Text size="$sm">평일 {dawnWorshipTimes.weekday}</Text>
        <Text size="$sm">주말 {dawnWorshipTimes.weekend}</Text>
      </Grid>
    </Grid.Container>
  </Card>
);

interface OtherInfoProps {
  locationUrl: string;
}

const OtherInfo: React.FC<OtherInfoProps> = ({ locationUrl }) => (
  <Card css={{ p: '$6' }}>
    <Text h4 css={{ d: 'flex', ai: 'center' }}><FiMapPin /><Spacer x={0.5} />찾아오시는 길</Text>
    {/* 여기에 지도나 주소 정보를 추가할 수 있습니다 */}
  </Card>
);

export { PastorInfo, WorshipTimes, OtherInfo };
import React, {useEffect, useState} from 'react';
import {View, ScrollView, Image, RefreshControl, Text} from 'react-native';
import {styles} from './styles';
import {getLeaderboards} from '../../untils/api';

function LeaderboardsScreen() {
  const mounted: any = React.useRef();

  const [leaderboardDatas, setLeaderboardDatas] = useState<any>([]);

  const [refreshing, setRefreshing] = React.useState(false);

  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic

      mounted.current = true;
      handleGetLeaderBoard();
    } else {
      // do componentDidUpdate logic
    }
  });
  const handleGetLeaderBoard = async () => {
    try {
      const response: any = await getLeaderboards();
      if (response.message === 'ok') {
        setLeaderboardDatas(response.data);
      }
    } catch (error) {
      console.log('error get leader board', error);
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      handleGetLeaderBoard();
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={styles.viewContent}>
          <Text style={styles.TextHeader}>Leaderboards</Text>
          <View style={styles.viewBtnSubmit}>
            {leaderboardDatas.map((item: any, idx: number) => (
              <View style={styles.itemLeaderboard} key={idx}>
                <View style={styles.viewImageAndName}>
                  <Image
                    style={styles.tinyLogo}
                    source={{uri: item.profile.avatar}}
                  />
                  <Text style={styles.textItem}>{item.name}</Text>
                </View>
                <Text style={styles.textItem}>{item.score}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default LeaderboardsScreen;

import React, {useEffect, useState} from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Text,
} from 'react-native';
import {styles} from './styles';
import {getQuestions, checkAns} from '../../untils/api';

function QuestionsScreen() {
  const mounted: any = React.useRef();

  const [count, setCount] = useState<number>(0);
  const [maxCount, setMaxCount] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [isSelect, setIsSelect] = useState<String>('');
  const [questionLists, setQuestionLists] = useState<any>([]);
  const [answers, setAnswers] = useState<any>([]);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const [isShowScore, setIsShowScore] = React.useState<boolean>(false);

  useEffect(() => {
    if (!mounted.current) {
      // do componentDidMount logic

      mounted.current = true;
      handleGetQuestions();
    } else {
      // do componentDidUpdate logic
    }
  });

  const handleGetQuestions = async () => {
    try {
      const response: any = await getQuestions();

      if (response.message === 'ok') {
        setQuestionLists(response.questions);
        setMaxCount(response.questions.length);
      }
    } catch (error) {
      console.log('err get questions', error);
    }
  };

  const handleSubmit = () => {
    const prepareAns = {id: questionLists[count].id, option: isSelect};
    let arr = answers;
    arr.push(prepareAns);
    setAnswers(arr);
    setIsSelect('');
    setCount(count + 1);
  };

  const handleCheckAns = async () => {
    try {
      const response: any = await checkAns({answers: answers});

      if (response.message === 'ok') {
        setScore(response.score);
        setIsShowScore(true);
      }
    } catch (error) {
      console.log('error check ans', error);
    }
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      handleGetQuestions();
      setIsSelect('');
      setCount(0);
      setAnswers([]);
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {count !== maxCount ? (
          <View style={styles.viewContent}>
            <Text style={styles.TextHeader}>Questions</Text>

            {questionLists.length !== 0 && (
              <View>
                <Text style={styles.questionTitle}>{`${count + 1}. ${
                  questionLists[count].question
                }`}</Text>
                {questionLists[count].options.map((item: any, idx: number) => (
                  <TouchableOpacity
                    onPress={() => setIsSelect(item)}
                    style={
                      isSelect === item
                        ? styles.borderActive
                        : styles.borderInactive
                    }
                    key={idx}>
                    <Text>{item}</Text>
                  </TouchableOpacity>
                ))}
                <View style={styles.viewBtnSubmit}>
                  <TouchableOpacity
                    disabled={isSelect == '' ? true : false}
                    onPress={() => handleSubmit()}
                    style={styles.btnSubmit}>
                    <Text style={styles.textBtnSubmit}>Next</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        ) : (
          <View style={styles.viewContent}>
            <Text style={styles.TextHeader}>Send Questions</Text>
            <View style={styles.viewBtnSubmit}>
              <TouchableOpacity
                onPress={() => handleCheckAns()}
                style={styles.btnSubmit}>
                <Text style={styles.textBtnSubmit}>Submit</Text>
              </TouchableOpacity>
            </View>
            {isShowScore && (
              <View style={{marginTop: 30, alignItems: 'center'}}>
                <Text style={styles.TextHeader}>Your score</Text>

                <Text style={styles.TextHeader}>{score}</Text>
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
export default QuestionsScreen;

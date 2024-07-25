const HOST = 'http://localhost:3005/api/v1';

const QUESTION = '/questions';
const CHECK_ANS = '/questions/check';
const LEADER_BOARD = 'leaderboard';

function joinUrl(link1: String, link2: String) {
  if (link1.endsWith('/')) {
    if (link2.startsWith('/')) {
      link2 = link2.slice(1);
    }
  } else {
    if (!link2.startsWith('/')) {
      link2 = '/' + link2;
    }
  }
  return `${link1}${link2}`;
}

export async function getQuestions() {
  try {
    const resp = await fetch(joinUrl(HOST, QUESTION), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    let response = await resp.json();

    if (resp.status === 200) {
      return response;
    }
  } catch (e) {
    console.log('err from api', e);
    return null;
  }
}

export async function checkAns(data: any) {
  try {
    console.log('data api', data);

    const resp = await fetch(joinUrl(HOST, CHECK_ANS), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    let response = await resp.json();

    if (resp.status === 200) {
      return response;
    }
  } catch (e) {
    console.log('err from api', e);
    return null;
  }
}

export async function getLeaderboards() {
  try {
    const resp = await fetch(joinUrl(HOST, LEADER_BOARD), {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    let response = await resp.json();

    if (resp.status === 200) {
      return response;
    }
  } catch (e) {
    console.log('err from api', e);
    return null;
  }
}

import * as types from './actionTypes';

export function fetchTopics() {
    return async (dispatch) => {
        try {
            const subredditArray = await redditService.getDefaultSubreddits();
            const topicsByUrl = _.keyBy(subredditArray, (subreddit) => subreddit.url);
            dispatch({ type: types.TOPICS_FETCHED, topicsByUrl });
        } catch (error) {
            console.error(error);
        }
    };
}
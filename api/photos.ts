import axios from 'axios';

import {Photo} from './dto/types';

const {get, post} = axios;

// const sendSuggestion = (payload: CreateSuggestionPayload) =>
//   post('/v2/help/suggestions', payload);

const getAllPhotos = () =>
  get<Photo[]>('https://jsonplaceholder.typicode.com/photos');

// const getSuggestedTopics = () =>
//   get<SuggestedTopic[]>('/v2/help/suggested-topics');

/**
 * Exports
 */

export default {
  getAllPhotos,
};

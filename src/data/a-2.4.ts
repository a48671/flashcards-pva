import { FlashcardId, IFlashcard } from '@/domain/flashcard';

const phrases: Record<FlashcardId, IFlashcard> = {
  phrase1: { id: 'phrase1', nativeText: 'Он сказал, что выиграл', targetText: 'He said that he had won', setId: 'a-2.4' },
  phrase2: { id: 'phrase2', nativeText: 'Я знал, что это уже произошло', targetText: 'He knew that it had already happened', setId: 'a-2.4' },
  phrase3: { id: 'phrase3', nativeText: 'Я был так счастлив, потому что сдал тест успешно', targetText: 'I was so happy because I had passed the test successfully', setId: 'a-2.4' },
  phrase4: { id: 'phrase4', nativeText: 'Когда я пришел домой, она уже приготовила ужин', targetText: 'When I came home, she had already cooked dinner', setId: 'a-2.4' },
  phrase5: { id: 'phrase5', nativeText: 'К тому времени, как я окончил школу, я уже достиг среднего уровня в английском', targetText: 'By the time I finished school, I had already reached an Intermediate level in English', setId: 'a-2.4' },
  phrase6: { id: 'phrase6', nativeText: 'Я уже ушел из дома к тому времени, как они прибыли', targetText: 'I had already left home by the time they arrived', setId: 'a-2.4' },
  phrase7: { id: 'phrase7', nativeText: 'Я понял, что сделал ошибку', targetText: 'I understood that I had made a mistake', setId: 'a-2.4' },
  phrase8: { id: 'phrase8', nativeText: 'Он сказал, что провалил тест', targetText: 'He said that he had failed the test', setId: 'a-2.4' },
  phrase9: { id: 'phrase9', nativeText: 'Она сказала мне, что никто не заметил это', targetText: 'She told me that no one had noticed it', setId: 'a-2.4' },
  phrase10: { id: 'phrase10', nativeText: 'Я знал, что они обманули её', targetText: 'I knew that they had deceived her', setId: 'a-2.4' },
  phrase11: { id: 'phrase11', nativeText: 'Я выяснил, что они обманули его', targetText: 'I found out that they had deceived him', setId: 'a-2.4' },
  phrase12: { id: 'phrase12', nativeText: 'Я выяснил, что они сказали мне неправду', targetText: 'I found out that they had told me a lie', setId: 'a-2.4' },
  phrase13: { id: 'phrase13', nativeText: 'Я закончил это делать к тому времени', targetText: 'I had finished doing it by that time', setId: 'a-2.4' },
  phrase14: { id: 'phrase14', nativeText: 'Я закончил делать все к трём часам', targetText: 'I had finished doing everything by three o\'clock', setId: 'a-2.4' },
  phrase15: { id: 'phrase15', nativeText: 'Когда он прибыл в аэропорт, самолет уже взлетел', targetText: 'When he arrived at the airport, the plane had already taken off', setId: 'a-2.4' },
  phrase16: { id: 'phrase16', nativeText: 'Когда она прибыла в аэропорт, самолет еще не приземлился', targetText: 'When she arrived at the airport, the plane hadn\'t landed yet', setId: 'a-2.4' },
  phrase17: { id: 'phrase17', nativeText: 'Я все закончил к тому времени, как она мне позвонила', targetText: 'I had finished everything by the time she called me', setId: 'a-2.4' },
  phrase18: { id: 'phrase18', nativeText: 'Я закончил смотреть то видео к тому времени, как они пришли ко мне', targetText: 'I had finished watching that video by the time they came to me', setId: 'a-2.4' },
  phrase19: { id: 'phrase19', nativeText: 'Она сказала, что он выиграл, но я не поверил ей', targetText: 'She said that he had won, but I didn\'t believe her', setId: 'a-2.4' },
  phrase20: { id: 'phrase20', nativeText: 'Он сказал, что никогда не был там, но это выглядело очень странно', targetText: 'He said that he had never been there, but it looked very strange', setId: 'a-2.4' },
  phrase21: { id: 'phrase21', nativeText: 'Я сказал ему, что я улучшил свой английский значительно благодаря этому методу', targetText: 'I told him that I had improved my English significantly thanks to this method', setId: 'a-2.4' },
  phrase22: { id: 'phrase22', nativeText: 'Она сказала, что никогда не была в таком красивом месте, потому что оно выглядело как настоящий рай', targetText: 'She said that she had never been to such a beautiful place, because it looked like a real paradise', setId: 'a-2.4' },
};
  
export default phrases;
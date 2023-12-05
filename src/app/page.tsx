// pages/index.tsx
import React from 'react';
import Word from '@/components/Word';

const Home: React.FC = () => {
  const text = `Sokrates, Atina'nın hemen güneyindeki bir kasabada, M.Ö. 469 ve 399
    yıllarında yaşamış Yunan filozofudur. Onun felsefe tarihindeki önemi, doğayı
    incelemeyi bir kenara bırakıp insanın dünyadaki varoluş amacının ve de nasıl
    yaşaması gerektiğinin sorularına cevaplar bulmaya çalışmasıdır.`;

  const words = text.match(/[\wğüşıöçĞÜŞİÖÇ']+|[.,;:?!]/g);

  const textElements = words?.map((word, index) => {
    const isPunctuation = /[.,;:?!]/.test(word);
    const secondWordIsPunctuation = /[.,;:?!]/.test(words[index + 1] || ''); // Null check ekledim
    return <Word key={index} value={word} isPunctuation={isPunctuation} secondWordIsPunctuation={secondWordIsPunctuation} />;
  });

  return (
    <div className='max-w-screen-xl h-full px-4 py-2 m-auto'>
      <div className='w-full h-full p-3 border border-gray-200 rounded-lg' style={{ wordWrap: 'break-word' }}>
        {textElements}
      </div>
    </div>
  );
};

export default Home;

import React from 'react';

function Preflight() {
  return (
    <div>
      <h3 className='text-2xl font-bold text-center text-green-500'>什麼是兔兔教？?</h3>
      <p>
        一種兔兔的信仰教派，本派信奉真神兔兔，且每時每刻都將兔兔放在心中，期待兔兔降臨為我們出生時所帶的原紅蘿蔔通通吃乾淨，以讓我們可以進兔兔天國。
      </p>
      <div>
        <ul className='list-decimal list-inside'>
          <li>每天都吃紅蘿蔔</li>
          <li>不吃紅蘿蔔就吃菜</li>
        </ul>
      </div>
      <button className='text-blue-500 underline'>
        <b>
          <i>信兔兔，無 Bug</i>
        </b>
      </button>
    </div>
  );
}

export default Preflight;

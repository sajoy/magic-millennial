var answers = [
    'IDK',
    'Sure, why not',
    'Whatevs',
    'Obvi',
    'LMGTFY',
    'IDGAF',
    'Shake again and chill',
    'Nobody cares',
    'Meh',
    'Feh',
    'If you say so',
    'I guess',
    'It might not work out',
    'LMAO',
    'SMH',
    'wut',
    'I can’t even',
    'It me',
    'TBH IDK',
    'YAS',
    'SWERVE',
    'OR NAH'
]

function ask () {
    var rand = Math.round( Math.random() * 21 ),
        p = document.createElement( 'p' ),
        answerDiv = document.getElementById( 'ball' );

    p.innerHTML = answers[rand];
    answerDiv.replaceChild( p, answerDiv.childNodes[0]);
}

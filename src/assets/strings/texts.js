import Latex from "react-native-latex";

class ScreenData {
    constructor(title, body) {
        this.title = title;
        this.body = body
    }
}

const Color = ''
const ICTObjects = new ScreenData('Основы информатики',
    `Информатика - наука о методах и процессах сбора, хранения, обработки, передачи, анализа и оценки информации с применением компьютерных технологий, обеспечивающих возможность её использования для принятия решений.

Объектами изучения в информатике являются информация, информационный процесс, алгоритм, исполнитель, компьютер, включая его аппаратное и программное обеспечение, и т. д.
`);

const CountingInf = new ScreenData('Подходы к измерению информации',
    `Существует 2 подхода к измерению информации: алфавитный и содержательный. Оба подхода использует одни и те же принципы измерения информации, но применяются в разных ситуациях.

Количество информации в алфавитном подходе вычисляется по формуле Хартли:
${"I=\\log_2 N"}

При этом, в алфавитном подходе ${"N"} - мощность алфавита в бит/символ, K - количество символов в тексте в символах, а I - информационный объем в битах (т.е. количество информации в тексте). Таким образом, алфавитный подход используется, когда требуется вычислить количество информации в тексте.

В содержательном подходе, количество информации тоже вычисляется по формуле Хартли, но в другом виде:

i=log(2,N)

При этом, N - количество равновероятных событий, а i - количество информации о происхождении данного события.
`)


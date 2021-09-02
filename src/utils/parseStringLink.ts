import { last } from '@bhc/ts-tools';

// const completeMissingBracket = ([first, ...rest]: string[]) => [first, ...rest.map(x => '[' + x)]

const separateLinksFromText = (str: string): string[] => str.split('[').map((x, i) => i === 0 ? x : '[' + x)

const addParenthesis = (array: string[]): string[] => array.map(x => x == last(array) ? x : x + ')')

const completeParenthesis = (array: string[][]): string[][] => array.map(x => x.length > 1 ? addParenthesis(x) : x)

const handleParenthesis = (array: string[]): string[][] => completeParenthesis(array.map(x => x.split(')')))

export const parseStringLink = (str: string): string[] => handleParenthesis(separateLinksFromText(str)).flat().filter(x => x != '')


export const parseStringLink2 = (str: string): string[] => {
	let strArray = str.split('[');
	let i = 0;
	for (let i = 1; i < strArray.length; i++) {
		strArray[i] = '[' + strArray[i];
	}
	let strArray2 = strArray.map(x => x.split(')'));
	while (i < strArray2.length) {
		if (strArray2[i].length > 1 ) {
			for (let j = 0; j < strArray2[i].length - 1 ; j++) {
				strArray2[i][j] = strArray2[i][j] + ')';
			}
		}
		i++
	}
	return strArray2.flat().filter(x => x != '');
}


export const isLink = (str: string): boolean => str[0] === '[' && str[str.length - 1] === ')' && str.includes('](')

export const handleLink = (str: string): [text: string, link: string] => {
	let link = str.split(']');
	return [link[0].replace(link[0], link[0].substring(1)),
		link[1].replace(link[1], link[1].substring(1, link[1].length - 1))
	]
}
// const truc = () =>
// <>
// {
//   arr.map(e => {
//     if (isLink(e)
//       return handleLink(e)
//     else
//       return <p>{e}</p>
//   })
// }
// </>

// "this is kind of a test to check if links (Markdown)[Markdown doc](https://www.google.com) are correctly parsed. arr[0] should be a normal test"
// // =>
// [
//     "this is kind of a test to check if links (Markdown)",
//     "[Markdown doc](https://www.google.com)",
//     " are correctly parsed. arr ",
//     "[0] should be a normal test",
// ]
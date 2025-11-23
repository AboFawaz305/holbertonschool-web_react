declare const MajorSymbol: unique symbol;
declare const MinorSymbol: unique symbol;

interface MajorCredits {
	brand: string & { readonly [MajorSymbol]: never };
	credits: number;
}

interface MinorCredits {
	brand: string & { readonly [MinorSymbol]: never };
	credits: number;
}

const sumMajorCredits = (subject1: number, subject2: number): MajorCredits => {
	return {
		brand: `${subject1 + subject2}` as string & {
			readonly [MajorSymbol]: never;
		},
		credits: subject1 + subject2,
	};
};

const sumMinorCredits = (subject1: number, subject2: number): MinorCredits => {
	return {
		brand: `${subject1 + subject2}` as string & {
			readonly [MinorSymbol]: never;
		},
		credits: subject1 + subject2,
	};
};


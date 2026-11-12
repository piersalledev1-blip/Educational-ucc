/* MAT 101 Chapter 4 — 50 original questions. Source-aligned; question stems are original applications, not copied textbook exercises. Fields: topic, difficulty, prompt, options, answer index, worked solution, quick solution, optional coded visual descriptor. */
window.mat101Chapter4 = [
  [
    "Polynomial degree · p.47–49",
    "Average",
    "What is the degree of 5x⁴−3x²+8?",
    [
      "2",
      "3",
      "4",
      "5"
    ],
    2,
    "The highest exponent with a non-zero coefficient is 4.",
    "Read the greatest exponent."
  ],
  [
    "Polynomial degree · p.47–49",
    "Challenging",
    "Let P have degree 5 and Q have degree 2. What is the degree of PQ?",
    [
      "3",
      "7",
      "10",
      "25"
    ],
    1,
    "The degree of a product is the sum of the degrees: 5+2=7.",
    "Add the degrees when multiplying polynomials."
  ],
  [
    "Polynomial degree · p.47–49",
    "Challenging",
    "P has degree 6 and Q has degree 3. What is the degree of P+Q?",
    [
      "3",
      "6",
      "9",
      "18"
    ],
    1,
    "Since the degrees differ, the highest-degree term of P cannot cancel; degree(P+Q)=6.",
    "When degrees differ, the higher-degree term remains."
  ],
  [
    "Polynomial degree · p.47–49",
    "Challenging",
    "A non-zero polynomial has degree 4. What is the greatest possible number of distinct real zeros?",
    [
      "2",
      "3",
      "4",
      "5"
    ],
    2,
    "A non-zero polynomial of degree n has at most n distinct zeros.",
    "Use the degree as an upper bound."
  ],
  [
    "Polynomial characteristics · p.47–49",
    "Challenging",
    "For very large positive or negative x, which part of 7x⁵−2x³+100 determines the graph's end behaviour?",
    [
      "The constant 100",
      "The term −2x³",
      "The leading term 7x⁵",
      "All terms equally"
    ],
    2,
    "For large |x|, the graph increasingly resembles its leading term 7x⁵.",
    "The highest-power term dominates for large magnitude inputs.",
    {
      "type": "polyGraph",
      "coefficients": [
        7,
        0,
        -2,
        0,
        0,
        100
      ],
      "xMin": -2.5,
      "xMax": 2.5,
      "initial": 0,
      "caption": "Explore how the leading term influences the two ends of the graph."
    }
  ],
  [
    "Polynomial operations · p.49–50",
    "Average",
    "If P(x)=2x²+3 and Q(x)=x−1, find P(2)+Q(2).",
    [
      "8",
      "10",
      "12",
      "14"
    ],
    2,
    "P(2)=11 and Q(2)=1, so the sum is 12. Correction: 11+1=12.",
    "Evaluate each polynomial first, then add."
  ],
  [
    "Polynomial operations · p.49–50",
    "Challenging",
    "P has degree 4 and Q has degree 4. Can degree(P+Q) be less than 4?",
    [
      "No, never",
      "Yes, if leading terms cancel",
      "Only if both are zero",
      "Only if their constants match"
    ],
    1,
    "If their leading coefficients are opposites, the degree-4 terms cancel and the sum can have lower degree.",
    "Equal degrees may cancel at the leading term."
  ],
  [
    "Polynomial division · p.50",
    "Average",
    "A division gives P(x)=(x−2)Q(x)+5. What is the remainder?",
    [
      "0",
      "2",
      "5",
      "x−2"
    ],
    2,
    "The remainder is the final term R(x)=5.",
    "Identify the term added after divisor times quotient."
  ],
  [
    "Polynomial division · p.50",
    "Challenging",
    "A polynomial is divided by a quadratic divisor. What is the greatest possible degree of the remainder?",
    [
      "0",
      "1",
      "2",
      "3"
    ],
    1,
    "The remainder must have degree strictly less than the degree of the divisor, so it can have degree at most 1.",
    "The remainder degree must be below 2."
  ],
  [
    "Polynomial division · p.50",
    "Challenging",
    "If P(x)=(2x²+1)(x−3)+(4x−7), what is the remainder when P is divided by 2x²+1?",
    [
      "x−3",
      "4x−7",
      "2x²+1",
      "0"
    ],
    1,
    "The expression is already in divisor-times-quotient-plus-remainder form; R(x)=4x−7.",
    "Read the remainder directly from the division identity."
  ],
  [
    "Remainder theorem · p.50–51",
    "Challenging",
    "A polynomial P is divided by x−4 and leaves remainder 9. What is P(4)?",
    [
      "0",
      "4",
      "9",
      "13"
    ],
    2,
    "The remainder theorem states that the remainder on division by x−a is P(a).",
    "Substitute the divisor's root into P."
  ],
  [
    "Factor theorem · p.51–52",
    "Average",
    "For P(x)=x²−7x+10, which value is a zero?",
    [
      "1",
      "2",
      "4",
      "5"
    ],
    1,
    "P(2)=4−14+10=0, so 2 is a zero.",
    "Substitute each candidate into the polynomial."
  ],
  [
    "Factor theorem · p.51–52",
    "Challenging",
    "For P(x)=x³+kx²−4x−4, x=−1 is a zero. Find k.",
    [
      "−1",
      "0",
      "1",
      "4"
    ],
    2,
    "P(−1)=−1+k+4−4=k−1=0, so k=1.",
    "Use P(−1)=0 and solve for the unknown coefficient."
  ],
  [
    "Factor theorem · p.51–52",
    "Challenging",
    "A polynomial P has P(−3)=0. Which expression must be a factor?",
    [
      "x−3",
      "x+3",
      "3x−1",
      "x²+3"
    ],
    1,
    "By the Factor Theorem, P(−3)=0 means x−(−3)=x+3 is a factor.",
    "A zero r gives the factor x−r."
  ],
  [
    "Factor theorem · p.51–52",
    "Challenging",
    "P(x)=x³−2x²−5x+6. Which is a factor?",
    [
      "x−1",
      "x−2",
      "x+1",
      "x−3"
    ],
    0,
    "P(1)=1−2−5+6=0, so x−1 is a factor.",
    "Evaluate the polynomial at each proposed root."
  ],
  [
    "Factor theorem · p.51–52",
    "Challenging",
    "A polynomial has factor x+2. What must its value be at x=−2?",
    [
      "−2",
      "0",
      "2",
      "1"
    ],
    1,
    "The factor x+2 is x−(−2), so −2 is a zero and P(−2)=0.",
    "Set the corresponding linear factor equal to zero."
  ],
  [
    "Multiplicity · p.52–53",
    "Challenging",
    "P(x)=(x−4)²(x+1)³. What is the multiplicity of the zero −1?",
    [
      "1",
      "2",
      "3",
      "5"
    ],
    2,
    "The factor corresponding to −1 is (x+1)³, so its multiplicity is 3.",
    "Read the exponent on the factor x−(−1)."
  ],
  [
    "Multiplicity · p.52–53",
    "Challenging",
    "A polynomial has a zero at x=2 of multiplicity 4. What does its graph do at the x-axis there?",
    [
      "Crosses the axis",
      "Touches and turns back",
      "Has no x-intercept",
      "Must be a straight line"
    ],
    1,
    "An even multiplicity gives a repeated factor with even power, so the graph touches the axis and turns back rather than changing sign.",
    "Even multiplicity means the sign does not change across the root.",
    {
      "type": "rootGraph",
      "roots": [
        4,
        4,
        -1,
        -1,
        -1
      ],
      "xMin": -3,
      "xMax": 6,
      "initial": 0,
      "caption": "Observe how the curve behaves at roots with even and odd multiplicity."
    }
  ],
  [
    "Multiplicity · p.52–53",
    "Challenging",
    "A degree-6 polynomial has distinct real zeros 1, −2 and 5, with multiplicities 2, 1 and 3. What degree must the remaining factor have?",
    [
      "0",
      "1",
      "2",
      "3"
    ],
    0,
    "The listed multiplicities add to 2+1+3=6, accounting for the full degree; the remaining factor is constant.",
    "Add the multiplicities and compare with the total degree."
  ],
  [
    "Multiplicity · p.52–53",
    "Challenging",
    "A degree-5 non-zero polynomial already has five distinct real zeros. Can it have another distinct zero?",
    [
      "Yes, always",
      "No",
      "Only if the leading coefficient is negative",
      "Only if one zero is repeated"
    ],
    1,
    "A degree-5 non-zero polynomial has at most five distinct zeros.",
    "The number of distinct zeros cannot exceed the degree."
  ],
  [
    "Alternating coefficient test · p.54",
    "Challenging",
    "For P(x)=2x³+ax²−5x+3, x+1 is a factor. Find a.",
    [
      "−10",
      "−6",
      "4",
      "10"
    ],
    1,
    "P(−1)=−2+a+5+3=a+6. Since x+1 is a factor, P(−1)=0, so a=−6.",
    "Substitute −1 into P and set the result to zero."
  ],
  [
    "Alternating coefficient test · p.54",
    "Challenging",
    "For P(x)=4x³−3x²+2x−7, what is the alternating sum of coefficients used to test x+1?",
    [
      "−16",
      "−12",
      "−8",
      "16"
    ],
    0,
    "P(−1)=−4−3−2−7=−16. This alternating coefficient sum equals P(−1).",
    "Evaluate P(−1), which is the alternating coefficient sum."
  ],
  [
    "Replacement operation · p.55–56",
    "Challenging",
    "A polynomial has a known zero x=3. Which substitution makes that zero become t=0?",
    [
      "x=t+3",
      "x=t−3",
      "x=3t",
      "x=t/3"
    ],
    0,
    "Set t=x−3, so x=t+3. Then P(t+3) has zero t=0.",
    "Shift the known root to the origin."
  ],
  [
    "Replacement operation · p.55–56",
    "Challenging",
    "Let P(x)=x³−3x²−4x+12 and set t=x−3. Which expression is P(t+3)?",
    [
      "t³+5t²+2t",
      "t³+6t²+5t",
      "t³+6t²−4t",
      "t³−3t²−4t+12"
    ],
    1,
    "Substitute x=t+3: P(t+3)=(t+3)³−3(t+3)²−4(t+3)+12=t³+6t²+5t.",
    "Substitute t+3 everywhere and expand carefully."
  ],
  [
    "Difference of powers · p.56–57",
    "Average",
    "Factorise x³−8.",
    [
      "(x−2)(x²+2x+4)",
      "(x+2)(x²−2x+4)",
      "(x−2)(x²−4)",
      "(x−8)(x²+1)"
    ],
    0,
    "x³−2³=(x−2)(x²+2x+4).",
    "Use x³−a³=(x−a)(x²+ax+a²)."
  ],
  [
    "Difference of powers · p.56–57",
    "Challenging",
    "Factorise x⁵−32 completely over the real numbers.",
    [
      "(x−2)(x⁴+2x³+4x²+8x+16)",
      "(x−2)(x+2)(x³+4)",
      "(x−2)⁵",
      "(x+2)(x⁴−2x³+4x²−8x+16)"
    ],
    0,
    "x⁵−2⁵=(x−2)(x⁴+2x³+4x²+8x+16).",
    "Apply the difference-of-powers identity with a=2 and n=5."
  ],
  [
    "Difference of powers · p.56–57",
    "Challenging",
    "Which factorisation of x⁴−81 is correct?",
    [
      "(x−3)(x+3)(x²+9)",
      "(x−9)(x+9)",
      "(x−3)⁴",
      "(x²−3)(x²+3)"
    ],
    0,
    "x⁴−81=(x²−9)(x²+9)=(x−3)(x+3)(x²+9).",
    "Use difference of squares twice.",
    {
      "type": "polyGraph",
      "coefficients": [
        1,
        0,
        0,
        0,
        -81
      ],
      "xMin": -4,
      "xMax": 4,
      "initial": 0,
      "caption": "Explore the real x-intercepts of this difference-of-powers polynomial."
    }
  ],
  [
    "Alternating coefficient test · p.54",
    "Average",
    "For P(x)=2x²+5x+3, is x+1 a factor?",
    [
      "Yes, because P(−1)=0",
      "No, because P(1)=0",
      "Yes, because P(0)=0",
      "No, because the degree is 2"
    ],
    0,
    "P(−1)=2−5+3=0, so the Factor Theorem confirms x+1 is a factor.",
    "Evaluate at −1."
  ],
  [
    "Factor theorem · p.51–52",
    "Challenging",
    "A polynomial P(x)=x³−4x²+ax+6 has x=2 as a zero. Find a.",
    [
      "−1",
      "−2",
      "1",
      "2"
    ],
    2,
    "P(2)=8−16+2a+6=2a−2. Setting P(2)=0 gives a=1.",
    "Set P(2)=0 and solve."
  ],
  [
    "Polynomial degree · p.47–49",
    "Challenging",
    "A polynomial of degree 3 intersects a horizontal line at four distinct points. What conclusion follows?",
    [
      "This is possible for every cubic",
      "The polynomial cannot have degree 3",
      "The leading coefficient must be negative",
      "The line must be the x-axis"
    ],
    1,
    "A degree-3 polynomial can meet any line in at most three points.",
    "Compare the stated intersection count with the degree bound."
  ],
  [
    "Rational Zero Theorem · p.57–60",
    "Challenging",
    "For P(x)=6x³−5x²+4x−8, which value is NOT a possible rational zero under the Rational Zero Theorem?",
    [
      "1/2",
      "−2",
      "3/2",
      "4/3"
    ],
    2,
    "A reduced p/q must have p dividing 8 and q dividing 6. 1/2, −2 and 4/3 satisfy those divisibility conditions; 3/2 does not because 3 does not divide 8.",
    "Check numerator against factors of the constant and denominator against factors of the leading coefficient."
  ],
  [
    "Rational Zero Theorem · p.57–60",
    "Average",
    "For an integer-coefficient polynomial with leading coefficient 1 and constant term −6, which could be a rational zero?",
    [
      "1/2",
      "2/3",
      "−3",
      "5/2"
    ],
    2,
    "With leading coefficient 1, any rational zero in lowest terms must be an integer divisor of −6; −3 is one.",
    "For a monic polynomial, rational roots must be integer factors of the constant."
  ],
  [
    "Rational Zero Theorem · p.57–60",
    "Challenging",
    "Which is the complete set of possible rational zeros of 4x²−7x+3?",
    [
      "±1, ±3",
      "±1, ±3, ±1/2, ±3/2, ±1/4, ±3/4",
      "±1/4, ±3/4 only",
      "±1, ±2, ±3, ±4"
    ],
    1,
    "p divides 3 and q divides 4, so the reduced candidates are ±1, ±3, ±1/2, ±3/2, ±1/4, ±3/4.",
    "List every signed numerator factor over every positive denominator factor, then reduce duplicates."
  ],
  [
    "Rational Zero Theorem · p.57–60",
    "Challenging",
    "For P(x)=2x³−3x²−8x+12, which rational number is a zero?",
    [
      "1/2",
      "−2",
      "3/2",
      "5/2"
    ],
    1,
    "P(−2)=−16−12+16+12=0, so −2 is a zero.",
    "Test the proposed candidates by substitution."
  ],
  [
    "Rational Zero Theorem · p.57–60",
    "Challenging",
    "If p/q in lowest terms is a rational zero of 5x⁴+3x²−14, what must be true?",
    [
      "p divides 5 and q divides 14",
      "p divides 14 and q divides 5",
      "p and q both divide 3",
      "p=q"
    ],
    1,
    "The Rational Zero Theorem says the numerator divides the constant term and the denominator divides the leading coefficient.",
    "Use constant term for numerator, leading coefficient for denominator."
  ],
  [
    "Rational Zero Theorem · p.57–60",
    "Challenging",
    "For P(x)=3x³+2x²−7x−6, which candidate is a rational zero?",
    [
      "1/3",
      "−1",
      "2/3",
      "3"
    ],
    1,
    "P(−1)=−3+2+7−6=0, so −1 is a zero.",
    "Substitute the candidate into P."
  ],
  [
    "Vieta · p.61–64",
    "Average",
    "A monic quadratic has roots 4 and −3. What is the constant term?",
    [
      "−12",
      "1",
      "7",
      "12"
    ],
    0,
    "The product of the roots is 4×(−3)=−12, which is the constant term for a monic quadratic.",
    "For a monic quadratic, constant term equals the product of roots."
  ],
  [
    "Vieta · p.61–64",
    "Challenging",
    "The roots of 3x²−8x+2=0 are r and s. Find r+s.",
    [
      "−8/3",
      "8/3",
      "2/3",
      "−2/3"
    ],
    1,
    "Vieta gives r+s=−b/a=8/3.",
    "Use negative coefficient of x divided by the leading coefficient."
  ],
  [
    "Vieta · p.61–64",
    "Challenging",
    "A cubic with leading coefficient 2 has roots 1, 2 and 4. What is its constant term?",
    [
      "−16",
      "−8",
      "8",
      "16"
    ],
    0,
    "For a cubic, the product of roots is −d/a. Thus d=−a(r₁r₂r₃)=−2(8)=−16.",
    "The constant term has the opposite sign to the product times the leading coefficient."
  ],
  [
    "Vieta · p.61–64",
    "Challenging",
    "A monic cubic has roots r,s,t with r+s+t=6 and rs+rt+st=11. What are the x³ and x² terms?",
    [
      "x³−6x²+11x",
      "x³+6x²+11x",
      "x³−11x²+6x",
      "x³+11x²−6x"
    ],
    0,
    "The monic cubic begins x³−(sum of roots)x²+(sum of pairwise products)x, hence x³−6x²+11x.",
    "The x² coefficient is the negative root sum; the x coefficient is the pairwise-product sum."
  ],
  [
    "Vieta · p.61–64",
    "Challenging",
    "For a cubic ax³+bx²+cx+d with roots r,s,t, which expression equals rs+rt+st?",
    [
      "−b/a",
      "c/a",
      "−d/a",
      "d/a"
    ],
    1,
    "Vieta's relation gives the sum of pairwise root products as c/a.",
    "Match the pairwise sum with the x coefficient."
  ],
  [
    "Vieta · p.61–64",
    "Challenging",
    "A monic cubic has roots 2, −1 and k. Its x² coefficient is −5. Find k.",
    [
      "−4",
      "−2",
      "2",
      "4"
    ],
    3,
    "For a monic cubic, the x² coefficient is minus the sum of roots: −(2−1+k)=−(1+k)=−5, so k=4.",
    "Use the negative sum of the roots."
  ],
  [
    "Vieta · p.61–64",
    "Challenging",
    "The roots of x³−4x²+x+6=0 are r,s,t. Find rst.",
    [
      "−6",
      "−2",
      "2",
      "6"
    ],
    0,
    "For a monic cubic, rst=−d=−6.",
    "The product of three roots is the negative constant term for a monic cubic."
  ],
  [
    "Vieta · p.61–64",
    "Challenging",
    "A monic quartic has roots 1,2,3,4. What is the coefficient of x³?",
    [
      "−10",
      "10",
      "−24",
      "24"
    ],
    0,
    "The coefficient of x³ is the negative sum of roots: −(1+2+3+4)=−10.",
    "The next-to-leading coefficient is the negative sum of roots."
  ],
  [
    "Vieta · p.61–64",
    "Challenging",
    "A quadratic has roots α and β with α+β=7 and αβ=10. Find α²+β².",
    [
      "19",
      "29",
      "39",
      "49"
    ],
    1,
    "α²+β²=(α+β)²−2αβ=49−20=29.",
    "Square the sum and subtract twice the product."
  ],
  [
    "Replacement operation · p.55–56",
    "Challenging",
    "A polynomial P has a zero at x=−2. Which substitution shifts this zero to t=0?",
    [
      "x=t−2",
      "x=t+2",
      "x=−2t",
      "x=2t"
    ],
    0,
    "To move the zero x=−2 to t=0, set t=x+2. Thus x=t−2, and P(t−2) has zero t=0.",
    "Choose t=x−a when the known zero is a."
  ],
  [
    "Difference of powers · p.56–57",
    "Challenging",
    "Which identity correctly factors xⁿ−aⁿ for positive integer n?",
    [
      "(x−a)(xⁿ⁻¹+axⁿ⁻²+⋯+aⁿ⁻¹)",
      "(x+a)(xⁿ⁻¹−axⁿ⁻²+⋯)",
      "(x−a)ⁿ",
      "(x+a)ⁿ"
    ],
    0,
    "The difference-of-powers identity is (x−a)(xⁿ⁻¹+axⁿ⁻²+…+aⁿ⁻¹).",
    "Use the sum of descending powers with positive a terms."
  ],
  [
    "Polynomial characteristics · p.47–49",
    "Challenging",
    "A degree-4 polynomial has six distinct intersections with one straight line. Which conclusion follows from the chapter's degree property?",
    [
      "Possible if its leading coefficient is positive",
      "Impossible for a degree-4 polynomial",
      "Possible only for a horizontal line",
      "It must be the zero polynomial"
    ],
    1,
    "A degree-n polynomial intersects any line in at most n points; six exceeds degree 4.",
    "The number of intersections cannot exceed the degree.",
    {
      "type": "polyGraph",
      "coefficients": [
        1,
        0,
        0,
        0,
        -1
      ],
      "xMin": -2,
      "xMax": 2,
      "initial": 0,
      "caption": "Inspect the number of intersections with the x-axis."
    }
  ],
  [
    "Factor theorem · p.51–54",
    "Challenging",
    "For P(x)=2x³−x²−8x+4, x=2 is a zero. After using t=x−2, which factorisation results?",
    [
      "(x−2)(x+2)(2x−1)",
      "(x−2)(x−1)(2x+3)",
      "(x+2)(x−2)²",
      "(x−2)(2x²+3x+4)"
    ],
    0,
    "Substitute x=t+2: P(t+2)=t(2t²+11t+12)=t(t+4)(2t+3). Returning to x gives (x−2)(x+2)(2x−1).",
    "Shift the known zero to t=0, factor the transformed polynomial, then substitute back."
  ],
  [
    "Vieta · p.61–64",
    "Challenging",
    "A cubic has roots 1, 2 and 3 and leading coefficient 2. What is its polynomial?",
    [
      "2x³−12x²+22x−12",
      "2x³+12x²+22x+12",
      "x³−6x²+11x−6",
      "2x³−6x²+11x−6"
    ],
    0,
    "2(x−1)(x−2)(x−3)=2(x³−6x²+11x−6)=2x³−12x²+22x−12.",
    "Form a(x−r)(x−s)(x−t) and expand."
  ]
];

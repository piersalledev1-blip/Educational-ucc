/* MAT 101 Chapter 3 — 50 original questions grounded in textbook pages 35–46. Optional visual key enables coded interactive diagrams. */
window.mat101Chapter3 = [
  [
    "Linear functions · p.35–37",
    "Average",
    "A straight line passes through (0,−3) and (2,5). What is its gradient?",
    [
      "−4",
      "2",
      "4",
      "8"
    ],
    2,
    "m=(5−(−3))/(2−0)=8/2=4.",
    "Rise divided by run."
  ],
  [
    "Linear functions · p.35–37",
    "Challenging",
    "A non-vertical line has gradient −3 and passes through (2,7). Which rule represents it?",
    [
      "f(x)=−3x+13",
      "f(x)=3x+1",
      "f(x)=−3x+7",
      "f(x)=−3x−1"
    ],
    0,
    "Use point-gradient form: f(x)=−3(x−2)+7=−3x+13.",
    "Substitute the point into y=mx+c."
  ],
  [
    "Linear functions · p.35–37",
    "Challenging",
    "Two lines have gradients 4 and k. They are perpendicular. Find k.",
    [
      "4",
      "−4",
      "1/4",
      "−1/4"
    ],
    3,
    "Perpendicular gradients satisfy 4k=−1, so k=−1/4.",
    "The product of perpendicular gradients is −1."
  ],
  [
    "Linear functions · p.35–37",
    "Challenging",
    "A line has gradient 0. Which description is correct?",
    [
      "It is vertical",
      "Its output is constant",
      "It is strictly increasing",
      "It is one-to-one"
    ],
    1,
    "A zero gradient gives the same function value for every input.",
    "A horizontal line has constant output."
  ],
  [
    "Linear functions · p.35–37",
    "Challenging",
    "The line f has gradient 5 and f(−1)=2. Find f(3).",
    [
      "12",
      "17",
      "22",
      "27"
    ],
    2,
    "The input increases by 4; the output increases by 5×4=20. Thus f(3)=22.",
    "Use the gradient as change in output per unit input."
  ],
  [
    "Linear interpolation · p.37–38",
    "Average",
    "A table gives g(10)=40 and g(14)=52. Using linear interpolation, estimate g(12).",
    [
      "43",
      "44",
      "46",
      "48"
    ],
    2,
    "The gradient is (52−40)/(14−10)=3. At x=12, g=40+3×2=46.",
    "12 is halfway between 10 and 14, so average the two outputs."
  ],
  [
    "Linear interpolation · p.37–38",
    "Challenging",
    "A quantity is 18.4 at x=6 and 21.1 at x=11. Estimate it at x=8 using a linear model.",
    [
      "19.48",
      "19.75",
      "20.02",
      "20.56"
    ],
    0,
    "Gradient=(21.1−18.4)/5=0.54. At x=8: 18.4+0.54×2=19.48.",
    "Find the rate per unit, then move two units from x=6."
  ],
  [
    "Linear functions · p.35–37",
    "Challenging",
    "Line L has gradient −2 and passes through (3,1). At what x-coordinate does it cross the y-axis?",
    [
      "−5",
      "−2",
      "5",
      "7"
    ],
    2,
    "y=−2(x−3)+1=−2x+7, so the y-intercept is 7.",
    "Set x=0 in the point-gradient equation."
  ],
  [
    "Linear functions · p.35–37",
    "Challenging",
    "Two non-vertical lines are parallel. One has rule y=7x−4. What must be the gradient of the other?",
    [
      "−7",
      "−4",
      "4",
      "7"
    ],
    3,
    "Parallel non-vertical lines have equal gradients.",
    "Parallel lines have the same slope."
  ],
  [
    "Linear functions · p.35–37",
    "Challenging",
    "A linear function is strictly decreasing on the real numbers. Which condition must hold?",
    [
      "m>0",
      "m<0",
      "m=0",
      "c<0"
    ],
    1,
    "A linear function decreases when its gradient is negative.",
    "The sign of the gradient determines monotonicity."
  ],
  [
    "Linear interpolation · p.37–38",
    "Challenging",
    "A table gives h(2)=7.5 and h(5)=12. Estimate h(3.8) linearly.",
    [
      "8.7",
      "9.3",
      "10.2",
      "11.1"
    ],
    2,
    "m=(12−7.5)/(5−2)=1.5. h(3.8)≈7.5+1.5(1.8)=10.2.",
    "Use the nearest two points and the gradient."
  ],
  [
    "Linear functions · p.35–37",
    "Challenging",
    "A line through (−2,6) and (4,−3) is:",
    [
      "y=−3x/2+3",
      "y=3x/2+3",
      "y=−3x+2",
      "y=−3x/2−3"
    ],
    0,
    "m=(−3−6)/(4+2)=−3/2. Using (−2,6): c=3.",
    "Find the gradient, then substitute one point to find c."
  ],
  [
    "Linear functions · p.35–37",
    "Challenging",
    "A non-constant linear function maps real inputs to real outputs. Which property follows?",
    [
      "It is many-to-one",
      "It is one-to-one",
      "It has no y-intercept",
      "It must be increasing"
    ],
    1,
    "A non-constant linear function has non-zero gradient, so distinct inputs produce distinct outputs.",
    "A non-zero slope gives a unique output for each input and vice versa."
  ],
  [
    "Quadratic functions · p.38–40",
    "Average",
    "Write x²−8x+3 in completed-square form.",
    [
      "(x−4)²−13",
      "(x+4)²−13",
      "(x−8)²+3",
      "(x−4)²+3"
    ],
    0,
    "x²−8x+3=(x−4)²−16+3=(x−4)²−13.",
    "Half the x-coefficient, square it, then compensate."
  ],
  [
    "Quadratic functions · p.38–40",
    "Challenging",
    "For f(x)=2x²−12x+7, find the x-coordinate of the turning point.",
    [
      "−3",
      "3",
      "6",
      "12"
    ],
    1,
    "The axis is x=−b/(2a)=12/4=3.",
    "Use −b/(2a)."
  ],
  [
    "Quadratic functions · p.38–40",
    "Challenging",
    "For f(x)=−3x²+12x−5, what is the maximum value?",
    [
      "5",
      "7",
      "9",
      "12"
    ],
    1,
    "The vertex x-coordinate is −12/(−6)=2. f(2)=−12+24−5=7; since a<0 this is the maximum.",
    "Find the vertex x-coordinate, substitute, and use the sign of a."
  ],
  [
    "Quadratic functions · p.38–40",
    "Challenging",
    "Complete the square: 3x²+12x+1.",
    [
      "3(x+2)²−11",
      "3(x−2)²−11",
      "3(x+4)²+1",
      "(3x+2)²−3"
    ],
    0,
    "3(x²+4x)+1=3[(x+2)²−4]+1=3(x+2)²−11.",
    "Factor out 3 before completing the square."
  ],
  [
    "Quadratic functions · p.38–40",
    "Challenging",
    "The graph of f(x)=−2(x−4)²+9 has which turning point?",
    [
      "Minimum at (4,9)",
      "Maximum at (4,9)",
      "Maximum at (−4,9)",
      "Minimum at (−4,9)"
    ],
    1,
    "The vertex form gives (4,9); the negative coefficient makes it a maximum.",
    "Read the vertex and inspect the sign of the squared term."
  ],
  [
    "Quadratic functions · p.38–41",
    "Challenging",
    "A parabola opens upwards and its turning point is (−2,−5). What is its minimum value?",
    [
      "−5",
      "−2",
      "2",
      "5"
    ],
    0,
    "An upward-opening parabola has its minimum at the turning point's y-coordinate.",
    "For a>0, the vertex is a minimum."
  ],
  [
    "Quadratic functions · p.39–41",
    "Challenging",
    "For f(x)=x²+6x+13, which statement is correct?",
    [
      "Two distinct real roots",
      "One repeated real root",
      "No real roots and f(x)>0 for all real x",
      "No real roots and f(x)<0 for all real x"
    ],
    2,
    "Δ=6²−4(1)(13)=−16<0. Since a>0, the quadratic is strictly positive for all real x.",
    "Use the discriminant, then the sign of the leading coefficient."
  ],
  [
    "Quadratic functions · p.39–41",
    "Challenging",
    "For what value of k does x²−10x+k=0 have a repeated root?",
    [
      "10",
      "20",
      "25",
      "50"
    ],
    2,
    "A repeated root requires Δ=0: 100−4k=0, so k=25.",
    "Set the discriminant equal to zero."
  ],
  [
    "Quadratic functions · p.39–41",
    "Challenging",
    "For which values of t does x²+tx+9 have two distinct real roots?",
    [
      "−6<t<6",
      "t≤−6 or t≥6",
      "t=±6",
      "All real t"
    ],
    1,
    "Two distinct real roots require Δ=t²−36>0, hence t<−6 or t>6.",
    "Set the discriminant strictly greater than zero."
  ],
  [
    "Quadratic functions · p.39–41",
    "Challenging",
    "A quadratic has a<0 and Δ<0. What is true for every real x?",
    [
      "f(x)>0",
      "f(x)<0",
      "f(x)=0 at two points",
      "The graph crosses the x-axis"
    ],
    1,
    "With no real roots and a negative leading coefficient, the quadratic is strictly negative everywhere.",
    "No real roots means it never reaches zero; the sign follows the leading coefficient."
  ],
  [
    "Quadratic functions · p.39–41",
    "Challenging",
    "For f(x)=4x²−4x+1, what happens where the graph meets the x-axis?",
    [
      "It crosses at two points",
      "It touches at one repeated root",
      "It never meets the axis",
      "It is a straight line"
    ],
    1,
    "Δ=(−4)²−4(4)(1)=0, so there is one repeated root and the graph touches the axis.",
    "A zero discriminant gives a repeated root."
  ],
  [
    "Quadratic functions · p.39–42",
    "Challenging",
    "Find the greatest t such that x²−tx+4≥t for every real x.",
    [
      "−4",
      "2",
      "4",
      "8"
    ],
    1,
    "Rewrite as x²−tx+(4−t)≥0. Require Δ≤0: t²−4(4−t)≤0, so (t+8)(t−4)≤0. Greatest t=4.",
    "For an upward quadratic to be non-negative for all x, require its discriminant ≤0."
  ],
  [
    "Quadratic functions · p.39–42",
    "Challenging",
    "For which k is 2x²+4x+k strictly positive for every real x?",
    [
      "k<2",
      "k=2 only",
      "k>2",
      "k≤2"
    ],
    2,
    "Since a=2>0, require Δ<0: 16−8k<0, so k>2.",
    "For strict positivity with upward opening, the discriminant must be negative."
  ],
  [
    "Quadratic functions · p.39–41",
    "Average",
    "What is the discriminant of 2x²−3x−2=0?",
    [
      "−7",
      "1",
      "9",
      "25"
    ],
    3,
    "Δ=b²−4ac=(−3)²−4(2)(−2)=9+16=25.",
    "Substitute a, b and c carefully."
  ],
  [
    "Quadratic functions · p.39–41",
    "Challenging",
    "How many real roots does 5x²+2x+3=0 have?",
    [
      "Two distinct",
      "One repeated",
      "None",
      "Infinitely many"
    ],
    2,
    "Δ=2²−4(5)(3)=4−60<0, so there are no real roots.",
    "A negative discriminant means no real zeros."
  ],
  [
    "Quadratic functions · p.39–41",
    "Challenging",
    "A quadratic graph has a repeated root at x=−3 and leading coefficient 2. Which function is it?",
    [
      "2(x−3)²",
      "2(x+3)²",
      "(x+3)²+2",
      "2x²−3"
    ],
    1,
    "A repeated root at −3 gives 2(x+3)².",
    "Use a(x−r)² for a repeated root r."
  ],
  [
    "Quadratic functions · p.38–41",
    "Challenging",
    "The vertex of f(x)=a(x−p)²+q is (p,q). If a<0, what is the range of f?",
    [
      "y≥q",
      "y≤q",
      "y>p",
      "All real y"
    ],
    1,
    "A negative a makes the parabola open downwards, so q is the maximum output.",
    "The graph cannot rise above its vertex."
  ],
  [
    "Quadratic from roots · p.43–45",
    "Average",
    "A monic quadratic has roots 2 and 7. Which equation represents it?",
    [
      "x²−9x+14=0",
      "x²+9x+14=0",
      "x²−5x+14=0",
      "x²−9x−14=0"
    ],
    0,
    "The polynomial is (x−2)(x−7)=x²−9x+14.",
    "Use sum of roots and product of roots."
  ],
  [
    "Quadratic from roots · p.43–45",
    "Challenging",
    "A quadratic has roots −4 and 3 and leading coefficient 2. Find its equation.",
    [
      "2x²+2x−24=0",
      "2x²−2x−24=0",
      "x²+x−12=0",
      "2x²+x−12=0"
    ],
    0,
    "2(x+4)(x−3)=2x²+2x−24.",
    "Form a(x−r₁)(x−r₂) and expand."
  ],
  [
    "Quadratic from roots · p.43–45",
    "Challenging",
    "For 3x²−7x+2=0, find the sum and product of its roots.",
    [
      "7/3 and 2/3",
      "−7/3 and 2/3",
      "7 and 2",
      "−7 and 2"
    ],
    0,
    "Sum=−b/a=7/3; product=c/a=2/3.",
    "Use −b/a and c/a."
  ],
  [
    "Quadratic from roots · p.43–45",
    "Challenging",
    "If roots α,β satisfy α+β=5 and αβ=6, what is α²+β²?",
    [
      "13",
      "19",
      "25",
      "31"
    ],
    0,
    "α²+β²=(α+β)²−2αβ=25−12=13.",
    "Square the sum and subtract twice the product."
  ],
  [
    "Quadratic from roots · p.43–45",
    "Challenging",
    "A quadratic has roots α and β. A new monic quadratic has roots α+1 and β+1. If α+β=−2 and αβ=−3, find the new equation.",
    [
      "x²−4=0",
      "x²+4=0",
      "x²−2x−4=0",
      "x²+2x−4=0"
    ],
    0,
    "The new sum is (α+β)+2=0. The new product is αβ+α+β+1=−3−2+1=−4. Hence the equation is x²−4=0.",
    "Find the shifted roots' sum and product, then form x²−Sx+P."
  ],
  [
    "Quadratic from roots · p.43–45",
    "Challenging",
    "If α,β are roots of x²−4x+1=0, find (α−β)².",
    [
      "8",
      "12",
      "14",
      "16"
    ],
    1,
    "(α−β)²=(α+β)²−4αβ=4²−4(1)=12.",
    "Use the sum and product of roots."
  ],
  [
    "Quadratic from roots · p.43–45",
    "Challenging",
    "The roots of 2x²+px+8=0 have sum −3. Find p.",
    [
      "−6",
      "−3",
      "3",
      "6"
    ],
    3,
    "The sum is −p/2=−3, hence p=6.",
    "Set −b/a equal to the given root sum."
  ],
  [
    "Quadratic functions · p.38–42",
    "Challenging",
    "For what values of k is x²+2kx+k+5 positive for all real x?",
    [
      "k<(1−√21)/2 or k>(1+√21)/2",
      "(1−√21)/2<k<(1+√21)/2",
      "k≤(1−√21)/2 or k≥(1+√21)/2",
      "k=0 only"
    ],
    1,
    "For strict positivity with a=1>0, require Δ<0: 4k²−4(k+5)<0, so k²−k−5<0. Its roots are (1±√21)/2, so k lies strictly between them.",
    "Set the discriminant below zero and solve the resulting quadratic inequality in k."
  ],
  [
    "Quadratic functions · p.38–41",
    "Average",
    "For y=−x²+6x−4, does the turning point give a maximum or minimum?",
    [
      "Maximum",
      "Minimum",
      "Neither",
      "Both"
    ],
    0,
    "The coefficient of x² is negative, so the parabola opens downward and the vertex is a maximum.",
    "A negative leading coefficient gives a maximum."
  ],
  [
    "Linear interpolation · p.37–38",
    "Challenging",
    "A measured value rises from 2.8 to 4.0 as x moves from 3 to 7. Under a linear model, what is the value at x=5.5?",
    [
      "3.25",
      "3.55",
      "3.70",
      "3.85"
    ],
    1,
    "Gradient=(4.0−2.8)/(7−3)=0.3. At x=5.5: 2.8+0.3×2.5=3.55.",
    "Find the gradient, then interpolate from x=3."
  ],
  [
    "Quadratic functions · p.38–41",
    "Challenging",
    "For f(x)=3x²+bx+12, the graph touches the x-axis once. What values can b take?",
    [
      "b=±6",
      "b=±12",
      "b=±√144",
      "b=0"
    ],
    1,
    "A repeated root requires Δ=0: b²−4(3)(12)=0, so b²=144 and b=±12.",
    "Set the discriminant to zero."
  ],
  [
    "Quadratic from roots · p.43–45",
    "Challenging",
    "A monic quadratic has roots whose sum is 4 and product is −5. What is the equation?",
    [
      "x²−4x−5=0",
      "x²+4x−5=0",
      "x²−4x+5=0",
      "x²+4x+5=0"
    ],
    0,
    "The monic equation is x²−(sum)x+(product)=0.",
    "Use x²−Sx+P."
  ],
  [
    "Quadratic from roots · p.43–45",
    "Challenging",
    "If α,β are roots of 2x²−5x−3=0, find 1/α+1/β.",
    [
      "−5/3",
      "5/3",
      "−3/5",
      "3/5"
    ],
    1,
    "1/α+1/β=(α+β)/(αβ)=(5/2)/(−3/2)=−5/3.",
    "Use (α+β)/(αβ)=S/P."
  ],
  [
    "Quadratic from roots · p.43–45",
    "Challenging",
    "If α,β are roots of x²−6x+4=0, find α³+β³.",
    [
      "72",
      "108",
      "144",
      "216"
    ],
    2,
    "α³+β³=(α+β)³−3αβ(α+β)=6³−3(4)(6)=216−72=144.",
    "Use S³−3PS for the sum of cubes."
  ],
  [
    "Quadratic functions · p.39–42",
    "Challenging",
    "For which k is x²−4x+k≥0 for all real x?",
    [
      "k<4",
      "k=4 only",
      "k≥4",
      "k≤4"
    ],
    2,
    "The parabola opens upward; non-negativity for all x requires Δ≤0: 16−4k≤0, hence k≥4.",
    "Set the discriminant less than or equal to zero."
  ],
  [
    "Quadratic functions · p.38–40",
    "Average",
    "Find the axis of symmetry of y=2x²+8x−1.",
    [
      "x=−4",
      "x=−2",
      "x=2",
      "x=4"
    ],
    1,
    "x=−b/(2a)=−8/4=−2.",
    "Use the axis formula."
  ],
  [
    "Linear functions · p.35–37",
    "Challenging",
    "A line passes through (1,4) and is perpendicular to y=−(1/3)x+2. Find its y-intercept.",
    [
      "1",
      "3",
      "7",
      "−3"
    ],
    0,
    "The perpendicular gradient is 3. Using (1,4): 4=3(1)+c, so c=1.",
    "Take the negative reciprocal gradient and substitute the point."
  ],
  [
    "Quadratic functions · p.39–41",
    "Challenging",
    "A quadratic has two distinct real roots and a positive leading coefficient. What is its sign outside the two roots?",
    [
      "Negative",
      "Positive",
      "Always zero",
      "Cannot be determined"
    ],
    1,
    "An upward-opening quadratic is positive outside its two simple real roots.",
    "A positive-leading parabola rises on both outer sides."
  ],
  [
    "Quadratic functions · p.38–41",
    "Challenging",
    "The graph y=a(x−2)²−7 has a minimum of −7. Which condition on a is required?",
    [
      "a<0",
      "a=0",
      "a>0",
      "Any real a"
    ],
    2,
    "A quadratic requires a≠0; a positive a opens upward and gives a minimum at the vertex.",
    "An upward-opening parabola has a minimum."
  ],
  [
    "Linear interpolation · p.37–38",
    "Challenging",
    "A function has f(4)=−2 and f(10)=7. Use the linear model to estimate f(7).",
    [
      "1/2",
      "5/2",
      "3",
      "7/2"
    ],
    1,
    "The midpoint input 7 lies halfway between 4 and 10, so the interpolated value is (−2+7)/2=5/2.",
    "At the midpoint, average the two endpoint values."
  ]
];

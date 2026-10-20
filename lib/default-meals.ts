import { MealSystem } from './types';

/**
 * EXACT Egyptian Home Foods Nutrition Plan:
 * - Start weight: 73.5 kg, Goal: lose up to 3 kg fat while building muscle
 * - NO fish, NO supplements
 * - Strong protein: eggs, gebna areesh, chicken breast, meat, kofta
 * - Supporting protein: ful, milk
 * - Training-day standard: 3 strong protein meals + 1 supporting protein food
 * - Water routine: 2.5 - 3.5 L (12 glasses target)
 */

export const DEFAULT_MEAL_SYSTEMS: MealSystem[] = [
  {
    id: 'routine-morning-training',
    name: 'Morning Training Routine',
    description: 'Egyptian home foods plan calibrated for morning gym/boxing sessions: light pre-workout fuel, post-workout breakfast, family lunch, and recovery dinner. No fish or supplements.',
    isCurrent: true,
    targetCalories: 2200,
    targetProtein: 145,
    targetCarbs: 235,
    targetFats: 60,
    waterCount: 8,
    waterTarget: 12,
    supplements: [],
    meals: [
      {
        id: 'm-am-1',
        name: 'Meal 1: وجبة قبل التمرين الصباحية (Pre-Workout Fuel)',
        scheduledTime: '07:00 AM',
        order: 1,
        selectedOptionId: 'opt-am1-1',
        consumed: false,
        notes: 'Eat 30–60 mins or 1.5–2 hours before morning training. Light digestible energy.',
        foods: [
          { id: 'f-am1-1', name: 'Milk (لبن)', portion: '250 ml', icon: 'shake', protein: 8, carbs: 12, fats: 8, calories: 150, consumed: false },
          { id: 'f-am1-2', name: 'Sokary Dates (بلح سكري)', portion: '4 dates (60g)', icon: 'fruit', protein: 1, carbs: 45, fats: 0, calories: 180, consumed: false },
        ],
        options: [
          {
            id: 'opt-am1-1',
            title: 'Option 1: Quick Fuel (250 ml Milk + 4 Sokary Dates or 1 Mango)',
            foods: [
              { id: 'f-am1-1', name: 'Milk (لبن)', portion: '250 ml', icon: 'shake', protein: 8, carbs: 12, fats: 8, calories: 150, consumed: false },
              { id: 'f-am1-2', name: 'Sokary Dates (بلح سكري)', portion: '4 dates (60g)', icon: 'fruit', protein: 1, carbs: 45, fats: 0, calories: 180, consumed: false },
            ],
          },
          {
            id: 'opt-am1-2',
            title: 'Option 2: 2 Scrambled Eggs + 1 Baladi Loaf (or 1 Boiled Potato)',
            foods: [
              { id: 'f-am1-3', name: 'Scrambled Eggs (بيض مقلي بالسمنة)', portion: '2 eggs + 1 tsp butter/samna', icon: 'egg', protein: 13, carbs: 1, fats: 15, calories: 190, consumed: false },
              { id: 'f-am1-4', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
            ],
          },
          {
            id: 'opt-am1-3',
            title: 'Option 3: Gebna Areesh (100g) + Half Baladi Loaf (or 1 Potato)',
            foods: [
              { id: 'f-am1-5', name: 'Gebna Areesh (جبنة قريش)', portion: '100g', icon: 'salad', protein: 18, carbs: 3, fats: 1, calories: 95, consumed: false },
              { id: 'f-am1-6', name: 'Baladi Bread (نصف رغيف بلدي)', portion: 'Half medium loaf', icon: 'bread', protein: 4, carbs: 25, fats: 1, calories: 120, consumed: false },
            ],
          },
          {
            id: 'opt-am1-4',
            title: 'Option 4: Ful Medames (¾ Bowl) + Half Baladi Loaf (or 1 Potato)',
            foods: [
              { id: 'f-am1-7', name: 'Ful Medames with 1 tsp oil (فول بالزيت والكمون)', portion: '¾ medium bowl', icon: 'bowl', protein: 11, carbs: 28, fats: 5, calories: 200, consumed: false },
              { id: 'f-am1-8', name: 'Baladi Bread (نصف رغيف بلدي)', portion: 'Half medium loaf', icon: 'bread', protein: 4, carbs: 25, fats: 1, calories: 120, consumed: false },
            ],
          },
          {
            id: 'opt-am1-5',
            title: 'Option 5: Honey & Milk/Tea Energy Booster + Half Baladi Loaf',
            foods: [
              { id: 'f-am1-9', name: 'Milk or Tea with 1 tbsp Honey (عسل نحل مع حليب أو شاي)', portion: '250 ml + 1 tbsp honey', icon: 'shake', protein: 8, carbs: 32, fats: 8, calories: 230, consumed: false },
              { id: 'f-am1-10', name: 'Baladi Bread (نصف رغيف بلدي)', portion: 'Half medium loaf', icon: 'bread', protein: 4, carbs: 25, fats: 1, calories: 120, consumed: false },
            ],
          },
          {
            id: 'opt-am1-6',
            title: 'Option 6: Outside Emergency (1 Normal Ful Sandwich)',
            foods: [
              { id: 'f-am1-11', name: 'Normal Ful Sandwich (سندوتش فول عادي)', portion: '1 sandwich (1.5-2 hrs before)', icon: 'bread', protein: 9, carbs: 38, fats: 6, calories: 240, consumed: false },
            ],
          },
        ],
      },
      {
        id: 'm-am-2',
        name: 'Meal 2: الفطار بعد التمرين (Post-Workout Breakfast)',
        scheduledTime: '10:30 AM',
        order: 2,
        selectedOptionId: 'opt-am2-1',
        consumed: false,
        notes: 'Eat 15–45 minutes after morning training. Strong protein foundation.',
        foods: [
          { id: 'f-am2-1', name: 'Scrambled Whole Eggs (بيض مقلي بسمنة/زبدة)', portion: '3 whole eggs + 1 tsp butter', icon: 'egg', protein: 19, carbs: 1, fats: 19, calories: 255, consumed: false },
          { id: 'f-am2-2', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf (or 2 boiled potatoes)', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
          { id: 'f-am2-3', name: 'Sliced Tomato & Cucumber (طماطم وخيار)', portion: 'Fresh slices (optional)', icon: 'salad', protein: 1, carbs: 4, fats: 0, calories: 20, consumed: false },
        ],
        options: [
          {
            id: 'opt-am2-1',
            title: 'Option 1: 3 Scrambled Eggs + 1 Baladi Loaf (or 2 Boiled Potatoes)',
            foods: [
              { id: 'f-am2-1', name: 'Scrambled Whole Eggs (بيض مقلي بسمنة/زبدة)', portion: '3 whole eggs + 1 tsp butter', icon: 'egg', protein: 19, carbs: 1, fats: 19, calories: 255, consumed: false },
              { id: 'f-am2-2', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf (or 2 boiled potatoes)', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
              { id: 'f-am2-3', name: 'Sliced Tomato & Cucumber (طماطم وخيار)', portion: 'Fresh slices (optional)', icon: 'salad', protein: 1, carbs: 4, fats: 0, calories: 20, consumed: false },
            ],
          },
          {
            id: 'opt-am2-2',
            title: 'Option 2: Ful Medames Bowl + 1 Baladi Loaf (or 1 Boiled Potato)',
            foods: [
              { id: 'f-am2-4', name: 'Ful Medames with 1 tsp oil & cumin (طبق فول مدمس بالزيت)', portion: '1 medium bowl', icon: 'bowl', protein: 15, carbs: 36, fats: 6, calories: 260, consumed: false },
              { id: 'f-am2-5', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
              { id: 'f-am2-6', name: 'Fresh Salad Slices (طماطم وخيار)', portion: 'Fresh slices', icon: 'salad', protein: 1, carbs: 4, fats: 0, calories: 20, consumed: false },
            ],
          },
          {
            id: 'opt-am2-3',
            title: 'Option 3: Gebna Areesh (150g) + 1 Baladi Loaf (or 2 Boiled Potatoes)',
            foods: [
              { id: 'f-am2-7', name: 'Fresh Gebna Areesh (جبنة قريش)', portion: '150g (small full bowl)', icon: 'salad', protein: 27, carbs: 4, fats: 2, calories: 145, consumed: false },
              { id: 'f-am2-8', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf (or 2 boiled potatoes)', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
              { id: 'f-am2-9', name: 'Olive Oil & Chopped Veggies (زيت زيتون مع طماطم)', portion: '1 tsp olive oil + cucumber/tomato', icon: 'salad', protein: 1, carbs: 3, fats: 5, calories: 60, consumed: false },
            ],
          },
          {
            id: 'opt-am2-4',
            title: 'Option 4: Fast Option (Areesh Sandwich in 1 Baladi Loaf + 250 ml Milk)',
            foods: [
              { id: 'f-am2-10', name: 'Areesh Sandwich (سندوتش جبنة قريش في رغيف بلدي)', portion: '150g areesh in 1 loaf', icon: 'bread', protein: 32, carbs: 54, fats: 3, calories: 370, consumed: false },
              { id: 'f-am2-11', name: 'Milk (حليب عادي)', portion: '250 ml', icon: 'shake', protein: 8, carbs: 12, fats: 8, calories: 150, consumed: false },
            ],
          },
          {
            id: 'opt-am2-5',
            title: 'Option 5: Outside Emergency (1 Ful Sandwich or White Cheese Sandwich)',
            foods: [
              { id: 'f-am2-12', name: 'Ful Sandwich or White Cheese Sandwich (سندوتش فول أو جبنة بيضا)', portion: '1 normal sandwich', icon: 'bread', protein: 10, carbs: 38, fats: 8, calories: 260, consumed: false },
              { id: 'f-am2-13', name: 'Tea with 1 small tsp sugar (شاي خفيف بمعلقة سكر)', portion: '1 cup', icon: 'shake', protein: 0, carbs: 5, fats: 0, calories: 20, consumed: false },
            ],
          },
          {
            id: 'opt-am2-6',
            title: 'Option 6: No-Protein Emergency (1 Boiled Potato + Half Baladi Loaf + Milk)',
            foods: [
              { id: 'f-am2-14', name: 'Boiled Potato (بطاطس مسلوقة)', portion: '1 medium potato', icon: 'bowl', protein: 3, carbs: 28, fats: 0, calories: 125, consumed: false },
              { id: 'f-am2-15', name: 'Baladi Bread (نصف رغيف بلدي)', portion: 'Half medium loaf', icon: 'bread', protein: 4, carbs: 25, fats: 1, calories: 120, consumed: false },
              { id: 'f-am2-16', name: 'Milk (لبن)', portion: '250 ml', icon: 'shake', protein: 8, carbs: 12, fats: 8, calories: 150, consumed: false },
            ],
          },
        ],
      },
      {
        id: 'm-am-3',
        name: 'Meal 3: الغداء العائلي المرن (Family Lunch)',
        scheduledTime: '02:30 PM',
        order: 3,
        selectedOptionId: 'opt-am3-1',
        consumed: false,
        notes: 'Eat what the family makes. Control only the portions. Do not mix full bread with full rice/pasta.',
        foods: [
          { id: 'f-am3-1', name: 'Chicken Breast (صدر دجاج بدون جلد)', portion: '1 full breast (no thighs)', icon: 'chicken', protein: 48, carbs: 0, fats: 5, calories: 240, consumed: false },
          { id: 'f-am3-2', name: 'Rice with Shariya (أرز بالشعرية أو مكرونة)', portion: '6 normal tablespoons', icon: 'bowl', protein: 4, carbs: 45, fats: 4, calories: 230, consumed: false },
          { id: 'f-am3-3', name: 'Molokhia / Fresh Salad (ملوخية أو سلطة خضراء)', portion: '1 medium bowl', icon: 'salad', protein: 2, carbs: 5, fats: 2, calories: 45, consumed: false },
        ],
        options: [
          {
            id: 'opt-am3-1',
            title: 'Option 1: Chicken Breast (1 full breast) + 6 tbsp Rice/Pasta + Salad/Molokhia',
            foods: [
              { id: 'f-am3-1', name: 'Chicken Breast (صدر دجاج بدون جلد)', portion: '1 full breast (no thighs)', icon: 'chicken', protein: 48, carbs: 0, fats: 5, calories: 240, consumed: false },
              { id: 'f-am3-2', name: 'Rice with Shariya (أرز بالشعرية أو مكرونة)', portion: '6 normal tablespoons', icon: 'bowl', protein: 4, carbs: 45, fats: 4, calories: 230, consumed: false },
              { id: 'f-am3-3', name: 'Molokhia / Fresh Salad (ملوخية أو سلطة خضراء)', portion: '1 medium bowl', icon: 'salad', protein: 2, carbs: 5, fats: 2, calories: 45, consumed: false },
            ],
          },
          {
            id: 'opt-am3-2',
            title: 'Option 2: Meat (2 normal pieces) + 6 tbsp Rice with Shariya + Veggies',
            foods: [
              { id: 'f-am3-4', name: 'Cooked Meat (لحمة مسلوقة/مطبوخة)', portion: '2 normal pieces (or 3 small)', icon: 'meat', protein: 40, carbs: 0, fats: 12, calories: 270, consumed: false },
              { id: 'f-am3-5', name: 'Rice with Shariya (أرز بالشعرية)', portion: '6 normal tablespoons', icon: 'bowl', protein: 4, carbs: 45, fats: 4, calories: 230, consumed: false },
              { id: 'f-am3-6', name: 'Cooked Vegetables / Salad (خضار مطبوخ أو سلطة)', portion: '1 bowl', icon: 'salad', protein: 2, carbs: 8, fats: 3, calories: 70, consumed: false },
            ],
          },
          {
            id: 'opt-am3-3',
            title: 'Option 3: Homemade Kofta (4 pieces) + 6 tbsp Rice or 1 Baladi Loaf',
            foods: [
              { id: 'f-am3-7', name: 'Homemade Kofta (كفتة بلدي مشوية)', portion: '4 normal pieces', icon: 'meat', protein: 34, carbs: 4, fats: 18, calories: 320, consumed: false },
              { id: 'f-am3-8', name: 'Baladi Loaf or Rice (عيش بلدي أو أرز)', portion: '1 loaf or 6 tbsp rice', icon: 'bread', protein: 6, carbs: 48, fats: 2, calories: 235, consumed: false },
              { id: 'f-am3-9', name: 'Tahina & Green Salad (سلطة طحينة وسلطة خضراء)', portion: '1-2 tbsp tahina + salad', icon: 'salad', protein: 2, carbs: 4, fats: 7, calories: 85, consumed: false },
            ],
          },
          {
            id: 'opt-am3-4',
            title: 'Option 4: Cooked Lentils (عدس 6-9 معالق) + Half Baladi Loaf',
            foods: [
              { id: 'f-am3-10', name: 'Cooked Lentils (شوربة عدس)', portion: '6–9 normal tablespoons', icon: 'bowl', protein: 16, carbs: 36, fats: 3, calories: 235, consumed: false },
              { id: 'f-am3-11', name: 'Baladi Bread (نصف رغيف بلدي)', portion: 'Half medium loaf', icon: 'bread', protein: 4, carbs: 25, fats: 1, calories: 120, consumed: false },
              { id: 'f-am3-12', name: 'Tomatoes & Cucumbers (طماطم وخيار)', portion: 'Fresh salad', icon: 'salad', protein: 1, carbs: 4, fats: 0, calories: 20, consumed: false },
            ],
          },
          {
            id: 'opt-am3-5',
            title: 'Option 5: Macaroni Béchamel (مكرونة بشاميل 5-6 معالق) + Green Salad',
            foods: [
              { id: 'f-am3-13', name: 'Macaroni Béchamel (مكرونة بشاميل)', portion: '5–6 normal tablespoons (no added bread/rice)', icon: 'bowl', protein: 22, carbs: 42, fats: 16, calories: 400, consumed: false },
              { id: 'f-am3-14', name: 'Fresh Green Salad (سلطة خضراء مشكلة)', portion: 'Large bowl', icon: 'salad', protein: 1, carbs: 5, fats: 1, calories: 30, consumed: false },
            ],
          },
          {
            id: 'opt-am3-6',
            title: 'Option 6: Homemade Burger (1 Sandwich) + Small Handful Fries',
            foods: [
              { id: 'f-am3-15', name: 'Homemade Burger (سندوتش برجر بيتي)', portion: '1 burger sandwich', icon: 'meat', protein: 28, carbs: 35, fats: 14, calories: 380, consumed: false },
              { id: 'f-am3-16', name: 'Fries (بطاطس مقلية)', portion: 'Small handful (3 tbsp only if served)', icon: 'bowl', protein: 2, carbs: 20, fats: 8, calories: 160, consumed: false },
            ],
          },
        ],
      },
      {
        id: 'm-am-4',
        name: 'Meal 4: العشاء البروتيني (Dinner / Evening Protein)',
        scheduledTime: '08:30 PM',
        order: 4,
        selectedOptionId: 'opt-am4-1',
        consumed: false,
        notes: 'Evening muscle repair and satiety. Gebna areesh, eggs, or leftover lunch protein.',
        foods: [
          { id: 'f-am4-1', name: 'Fresh Gebna Areesh (جبنة قريش)', portion: '150g (small full bowl)', icon: 'salad', protein: 27, carbs: 4, fats: 2, calories: 145, consumed: false },
          { id: 'f-am4-2', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf (or 2 boiled potatoes)', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
          { id: 'f-am4-3', name: 'Fresh Sliced Tomatoes & Cucumber (طماطم وخيار)', portion: 'Fresh slices', icon: 'salad', protein: 1, carbs: 4, fats: 0, calories: 20, consumed: false },
        ],
        options: [
          {
            id: 'opt-am4-1',
            title: 'Option 1: Gebna Areesh (150g) + 1 Baladi Loaf (or 2 Boiled Potatoes)',
            foods: [
              { id: 'f-am4-1', name: 'Fresh Gebna Areesh (جبنة قريش)', portion: '150g (small full bowl)', icon: 'salad', protein: 27, carbs: 4, fats: 2, calories: 145, consumed: false },
              { id: 'f-am4-2', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf (or 2 boiled potatoes)', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
              { id: 'f-am4-3', name: 'Fresh Sliced Tomatoes & Cucumber (طماطم وخيار)', portion: 'Fresh slices', icon: 'salad', protein: 1, carbs: 4, fats: 0, calories: 20, consumed: false },
            ],
          },
          {
            id: 'opt-am4-2',
            title: 'Option 2: 3 Scrambled Eggs + 1 Baladi Loaf (or 1 Boiled Potato)',
            foods: [
              { id: 'f-am4-4', name: 'Scrambled Whole Eggs with 1 tsp butter (بيض مقلي بالزبدة)', portion: '3 whole eggs', icon: 'egg', protein: 19, carbs: 1, fats: 19, calories: 255, consumed: false },
              { id: 'f-am4-5', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf (or 1 boiled potato)', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
            ],
          },
          {
            id: 'opt-am4-3',
            title: 'Option 3: Lunch Leftovers (1 Chicken Breast or 2 Meat Pieces) + Veggies',
            foods: [
              { id: 'f-am4-6', name: 'Leftover Chicken or Meat (فراخ أو لحمة من الغداء)', portion: '1 breast or 2 pieces', icon: 'chicken', protein: 42, carbs: 0, fats: 8, calories: 240, consumed: false },
              { id: 'f-am4-7', name: 'Baladi Bread or Green Salad (نصف رغيف أو سلطة خضراء)', portion: 'Half loaf or large salad', icon: 'bread', protein: 4, carbs: 25, fats: 1, calories: 125, consumed: false },
            ],
          },
          {
            id: 'opt-am4-4',
            title: 'Option 4: Ful Medames (1 Medium Bowl) + 1 Baladi Loaf',
            foods: [
              { id: 'f-am4-8', name: 'Ful Medames with 1 tsp oil & cumin (طبق فول بالزيت)', portion: '1 medium bowl', icon: 'bowl', protein: 15, carbs: 36, fats: 6, calories: 260, consumed: false },
              { id: 'f-am4-9', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
            ],
          },
          {
            id: 'opt-am4-5',
            title: 'Option 5: Fast Option (Areesh Sandwich in Baladi Loaf + 250 ml Milk)',
            foods: [
              { id: 'f-am4-10', name: 'Areesh Sandwich (سندوتش جبنة قريش)', portion: '150g areesh in 1 loaf', icon: 'bread', protein: 32, carbs: 54, fats: 3, calories: 370, consumed: false },
              { id: 'f-am4-11', name: 'Milk (لبن)', portion: '250 ml', icon: 'shake', protein: 8, carbs: 12, fats: 8, calories: 150, consumed: false },
            ],
          },
          {
            id: 'opt-am4-6',
            title: 'Option 6: Bridge Snack / Light Option (100g Areesh + Half Loaf + Milk + 4 Dates)',
            foods: [
              { id: 'f-am4-12', name: 'Gebna Areesh (جبنة قريش)', portion: '100g (or 2 scrambled eggs)', icon: 'salad', protein: 18, carbs: 3, fats: 2, calories: 100, consumed: false },
              { id: 'f-am4-13', name: 'Baladi Bread (نصف رغيف بلدي)', portion: 'Half medium loaf', icon: 'bread', protein: 4, carbs: 25, fats: 1, calories: 120, consumed: false },
              { id: 'f-am4-14', name: 'Milk + 4 Sokary Dates (حليب مع 4 بلحات سكري)', portion: '250 ml + 4 dates', icon: 'fruit', protein: 9, carbs: 45, fats: 8, calories: 290, consumed: false },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'routine-evening-training',
    name: 'Evening Training Routine',
    description: 'Egyptian home foods plan calibrated for evening gym/boxing sessions: morning breakfast, family lunch, pre-workout energizer, and post-workout recovery dinner. No fish or supplements.',
    isCurrent: false,
    targetCalories: 2200,
    targetProtein: 145,
    targetCarbs: 235,
    targetFats: 60,
    waterCount: 8,
    waterTarget: 12,
    supplements: [],
    meals: [
      {
        id: 'm-pm-1',
        name: 'Meal 1: الفطار الأساسي (Breakfast)',
        scheduledTime: '09:00 AM',
        order: 1,
        selectedOptionId: 'opt-pm1-1',
        consumed: false,
        notes: 'Eat 15–45 minutes after waking. Strong morning protein foundation.',
        foods: [
          { id: 'f-pm1-1', name: 'Scrambled Whole Eggs with 1 tsp butter (بيض مقلي بالسمنة)', portion: '3 whole eggs + 1 tsp butter', icon: 'egg', protein: 19, carbs: 1, fats: 19, calories: 255, consumed: false },
          { id: 'f-pm1-2', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf (or 2 boiled potatoes)', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
          { id: 'f-pm1-3', name: 'Sliced Tomato & Cucumber (طماطم وخيار)', portion: 'Fresh slices (optional)', icon: 'salad', protein: 1, carbs: 4, fats: 0, calories: 20, consumed: false },
        ],
        options: [
          {
            id: 'opt-pm1-1',
            title: 'Option 1: 3 Scrambled Eggs + 1 Baladi Loaf (or 2 Boiled Potatoes)',
            foods: [
              { id: 'f-pm1-1', name: 'Scrambled Whole Eggs with 1 tsp butter (بيض مقلي بالسمنة)', portion: '3 whole eggs + 1 tsp butter', icon: 'egg', protein: 19, carbs: 1, fats: 19, calories: 255, consumed: false },
              { id: 'f-pm1-2', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf (or 2 boiled potatoes)', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
              { id: 'f-pm1-3', name: 'Sliced Tomato & Cucumber (طماطم وخيار)', portion: 'Fresh slices (optional)', icon: 'salad', protein: 1, carbs: 4, fats: 0, calories: 20, consumed: false },
            ],
          },
          {
            id: 'opt-pm1-2',
            title: 'Option 2: Ful Medames Bowl + 1 Baladi Loaf (or 1 Boiled Potato)',
            foods: [
              { id: 'f-pm1-4', name: 'Ful Medames with 1 tsp oil & cumin (طبق فول مدمس بالزيت)', portion: '1 medium bowl', icon: 'bowl', protein: 15, carbs: 36, fats: 6, calories: 260, consumed: false },
              { id: 'f-pm1-5', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
              { id: 'f-pm1-6', name: 'Fresh Salad Slices (طماطم وخيار)', portion: 'Fresh slices', icon: 'salad', protein: 1, carbs: 4, fats: 0, calories: 20, consumed: false },
            ],
          },
          {
            id: 'opt-pm1-3',
            title: 'Option 3: Gebna Areesh (150g) + 1 Baladi Loaf (or 2 Boiled Potatoes)',
            foods: [
              { id: 'f-pm1-7', name: 'Fresh Gebna Areesh (جبنة قريش)', portion: '150g (small full bowl)', icon: 'salad', protein: 27, carbs: 4, fats: 2, calories: 145, consumed: false },
              { id: 'f-pm1-8', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf (or 2 boiled potatoes)', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
              { id: 'f-pm1-9', name: 'Olive Oil & Chopped Veggies (زيت زيتون مع طماطم وخيار)', portion: '1 tsp olive oil + salad', icon: 'salad', protein: 1, carbs: 3, fats: 5, calories: 60, consumed: false },
            ],
          },
          {
            id: 'opt-pm1-4',
            title: 'Option 4: Fast Option (Areesh Sandwich in 1 Baladi Loaf + 250 ml Milk)',
            foods: [
              { id: 'f-pm1-10', name: 'Areesh Sandwich (سندوتش جبنة قريش في رغيف بلدي)', portion: '150g areesh in 1 loaf', icon: 'bread', protein: 32, carbs: 54, fats: 3, calories: 370, consumed: false },
              { id: 'f-pm1-11', name: 'Milk (حليب عادي)', portion: '250 ml', icon: 'shake', protein: 8, carbs: 12, fats: 8, calories: 150, consumed: false },
            ],
          },
          {
            id: 'opt-pm1-5',
            title: 'Option 5: Outside Emergency (1 Ful Sandwich or White Cheese Sandwich)',
            foods: [
              { id: 'f-pm1-12', name: 'Ful Sandwich or White Cheese Sandwich (سندوتش فول أو جبنة بيضا)', portion: '1 normal sandwich', icon: 'bread', protein: 10, carbs: 38, fats: 8, calories: 260, consumed: false },
              { id: 'f-pm1-13', name: 'Tea with 1 small tsp sugar (شاي خفيف بمعلقة سكر)', portion: '1 cup', icon: 'shake', protein: 0, carbs: 5, fats: 0, calories: 20, consumed: false },
            ],
          },
          {
            id: 'opt-pm1-6',
            title: 'Option 6: No-Protein Emergency (1 Boiled Potato + Half Baladi Loaf + Milk)',
            foods: [
              { id: 'f-pm1-14', name: 'Boiled Potato (بطاطس مسلوقة)', portion: '1 medium potato', icon: 'bowl', protein: 3, carbs: 28, fats: 0, calories: 125, consumed: false },
              { id: 'f-pm1-15', name: 'Baladi Bread (نصف رغيف بلدي)', portion: 'Half medium loaf', icon: 'bread', protein: 4, carbs: 25, fats: 1, calories: 120, consumed: false },
              { id: 'f-pm1-16', name: 'Milk (لبن)', portion: '250 ml', icon: 'shake', protein: 8, carbs: 12, fats: 8, calories: 150, consumed: false },
            ],
          },
        ],
      },
      {
        id: 'm-pm-2',
        name: 'Meal 2: الغداء العائلي المرن (Family Lunch)',
        scheduledTime: '02:00 PM',
        order: 2,
        selectedOptionId: 'opt-pm2-1',
        consumed: false,
        notes: 'Eat what the family makes. Control only portions: 6 tbsp rice with shariya or macaroni. No fish.',
        foods: [
          { id: 'f-pm2-1', name: 'Chicken Breast (صدر دجاج بدون جلد)', portion: '1 full breast (no thighs)', icon: 'chicken', protein: 48, carbs: 0, fats: 5, calories: 240, consumed: false },
          { id: 'f-pm2-2', name: 'Rice with Shariya (أرز بالشعرية أو مكرونة)', portion: '6 normal tablespoons', icon: 'bowl', protein: 4, carbs: 45, fats: 4, calories: 230, consumed: false },
          { id: 'f-pm2-3', name: 'Molokhia / Fresh Salad (ملوخية أو سلطة خضراء)', portion: '1 medium bowl', icon: 'salad', protein: 2, carbs: 5, fats: 2, calories: 45, consumed: false },
        ],
        options: [
          {
            id: 'opt-pm2-1',
            title: 'Option 1: Chicken Breast (1 full breast) + 6 tbsp Rice/Pasta + Salad/Molokhia',
            foods: [
              { id: 'f-pm2-1', name: 'Chicken Breast (صدر دجاج بدون جلد)', portion: '1 full breast (no thighs)', icon: 'chicken', protein: 48, carbs: 0, fats: 5, calories: 240, consumed: false },
              { id: 'f-pm2-2', name: 'Rice with Shariya (أرز بالشعرية أو مكرونة)', portion: '6 normal tablespoons', icon: 'bowl', protein: 4, carbs: 45, fats: 4, calories: 230, consumed: false },
              { id: 'f-pm2-3', name: 'Molokhia / Fresh Salad (ملوخية أو سلطة خضراء)', portion: '1 medium bowl', icon: 'salad', protein: 2, carbs: 5, fats: 2, calories: 45, consumed: false },
            ],
          },
          {
            id: 'opt-pm2-2',
            title: 'Option 2: Meat (2 normal pieces) + 6 tbsp Rice with Shariya + Veggies',
            foods: [
              { id: 'f-pm2-4', name: 'Cooked Meat (لحمة مسلوقة/مطبوخة)', portion: '2 normal pieces (or 3 small)', icon: 'meat', protein: 40, carbs: 0, fats: 12, calories: 270, consumed: false },
              { id: 'f-pm2-5', name: 'Rice with Shariya (أرز بالشعرية)', portion: '6 normal tablespoons', icon: 'bowl', protein: 4, carbs: 45, fats: 4, calories: 230, consumed: false },
              { id: 'f-pm2-6', name: 'Cooked Vegetables / Salad (خضار مطبوخ أو سلطة)', portion: '1 bowl', icon: 'salad', protein: 2, carbs: 8, fats: 3, calories: 70, consumed: false },
            ],
          },
          {
            id: 'opt-pm2-3',
            title: 'Option 3: Homemade Kofta (4 pieces) + 6 tbsp Rice or 1 Baladi Loaf',
            foods: [
              { id: 'f-pm2-7', name: 'Homemade Kofta (كفتة بلدي مشوية)', portion: '4 normal pieces', icon: 'meat', protein: 34, carbs: 4, fats: 18, calories: 320, consumed: false },
              { id: 'f-pm2-8', name: 'Baladi Loaf or Rice (عيش بلدي أو أرز)', portion: '1 loaf or 6 tbsp rice', icon: 'bread', protein: 6, carbs: 48, fats: 2, calories: 235, consumed: false },
              { id: 'f-pm2-9', name: 'Tahina & Green Salad (سلطة طحينة وسلطة خضراء)', portion: '1-2 tbsp tahina + salad', icon: 'salad', protein: 2, carbs: 4, fats: 7, calories: 85, consumed: false },
            ],
          },
          {
            id: 'opt-pm2-4',
            title: 'Option 4: Cooked Lentils (عدس 6-9 معالق) + Half Baladi Loaf',
            foods: [
              { id: 'f-pm2-10', name: 'Cooked Lentils (شوربة عدس)', portion: '6–9 normal tablespoons', icon: 'bowl', protein: 16, carbs: 36, fats: 3, calories: 235, consumed: false },
              { id: 'f-pm2-11', name: 'Baladi Bread (نصف رغيف بلدي)', portion: 'Half medium loaf', icon: 'bread', protein: 4, carbs: 25, fats: 1, calories: 120, consumed: false },
              { id: 'f-pm2-12', name: 'Tomatoes & Cucumbers (طماطم وخيار)', portion: 'Fresh salad', icon: 'salad', protein: 1, carbs: 4, fats: 0, calories: 20, consumed: false },
            ],
          },
          {
            id: 'opt-pm2-5',
            title: 'Option 5: Macaroni Béchamel (مكرونة بشاميل 5-6 معالق) + Green Salad',
            foods: [
              { id: 'f-pm2-13', name: 'Macaroni Béchamel (مكرونة بشاميل)', portion: '5–6 normal tablespoons (no added bread/rice)', icon: 'bowl', protein: 22, carbs: 42, fats: 16, calories: 400, consumed: false },
              { id: 'f-pm2-14', name: 'Fresh Green Salad (سلطة خضراء مشكلة)', portion: 'Large bowl', icon: 'salad', protein: 1, carbs: 5, fats: 1, calories: 30, consumed: false },
            ],
          },
          {
            id: 'opt-pm2-6',
            title: 'Option 6: Homemade Burger (1 Sandwich) + Small Handful Fries',
            foods: [
              { id: 'f-pm2-15', name: 'Homemade Burger (سندوتش برجر بيتي)', portion: '1 burger sandwich', icon: 'meat', protein: 28, carbs: 35, fats: 14, calories: 380, consumed: false },
              { id: 'f-pm2-16', name: 'Fries (بطاطس مقلية)', portion: 'Small handful (3 tbsp only if served)', icon: 'bowl', protein: 2, carbs: 20, fats: 8, calories: 160, consumed: false },
            ],
          },
        ],
      },
      {
        id: 'm-pm-3',
        name: 'Meal 3: وجبة قبل التمرين المسائي (Pre-Workout Fuel)',
        scheduledTime: '05:30 PM',
        order: 3,
        selectedOptionId: 'opt-pm3-1',
        consumed: false,
        notes: 'Eat 2–3 hours before evening training, or quick option 30–60 min before if hungry.',
        foods: [
          { id: 'f-pm3-1', name: 'Scrambled Eggs with 1 tsp butter (بيض مقلي بالسمنة)', portion: '2 whole eggs', icon: 'egg', protein: 13, carbs: 1, fats: 13, calories: 175, consumed: false },
          { id: 'f-pm3-2', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf (or 1 boiled potato)', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
        ],
        options: [
          {
            id: 'opt-pm3-1',
            title: 'Option 1: 2 Scrambled Eggs + 1 Baladi Loaf (or 1 Boiled Potato)',
            foods: [
              { id: 'f-pm3-1', name: 'Scrambled Eggs with 1 tsp butter (بيض مقلي بالسمنة)', portion: '2 whole eggs', icon: 'egg', protein: 13, carbs: 1, fats: 13, calories: 175, consumed: false },
              { id: 'f-pm3-2', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf (or 1 boiled potato)', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
            ],
          },
          {
            id: 'opt-pm3-2',
            title: 'Option 2: Gebna Areesh (100g) + Half Baladi Loaf (or 1 Boiled Potato)',
            foods: [
              { id: 'f-pm3-3', name: 'Gebna Areesh (جبنة قريش)', portion: '100g fresh', icon: 'salad', protein: 18, carbs: 3, fats: 1, calories: 95, consumed: false },
              { id: 'f-pm3-4', name: 'Baladi Bread (نصف رغيف بلدي)', portion: 'Half medium loaf', icon: 'bread', protein: 4, carbs: 25, fats: 1, calories: 120, consumed: false },
            ],
          },
          {
            id: 'opt-pm3-3',
            title: 'Option 3: Ful Medames (¾ Bowl) + Half Baladi Loaf (or 1 Boiled Potato)',
            foods: [
              { id: 'f-pm3-5', name: 'Ful Medames with 1 tsp oil & cumin (طبق فول بالزيت)', portion: '¾ medium bowl', icon: 'bowl', protein: 11, carbs: 28, fats: 5, calories: 200, consumed: false },
              { id: 'f-pm3-6', name: 'Baladi Bread (نصف رغيف بلدي)', portion: 'Half medium loaf', icon: 'bread', protein: 4, carbs: 25, fats: 1, calories: 120, consumed: false },
            ],
          },
          {
            id: 'opt-pm3-4',
            title: 'Option 4: Quick Pre-Workout (250 ml Milk + 4 Sokary Dates or 1 Mango)',
            foods: [
              { id: 'f-pm3-7', name: 'Milk (حليب عادي)', portion: '250 ml', icon: 'shake', protein: 8, carbs: 12, fats: 8, calories: 150, consumed: false },
              { id: 'f-pm3-8', name: 'Sokary Dates (بلح سكري)', portion: '4 dates (60g) or 1 mango', icon: 'fruit', protein: 1, carbs: 45, fats: 0, calories: 180, consumed: false },
            ],
          },
          {
            id: 'opt-pm3-5',
            title: 'Option 5: Honey & Tea/Milk Energy Booster + Half Baladi Loaf',
            foods: [
              { id: 'f-pm3-9', name: 'Tea with 1 tsp sugar + 1 tbsp honey (شاي بالعسل)', portion: '1 cup + 1 tbsp honey', icon: 'shake', protein: 0, carbs: 22, fats: 0, calories: 90, consumed: false },
              { id: 'f-pm3-10', name: 'Baladi Bread (نصف رغيف بلدي)', portion: 'Half medium loaf', icon: 'bread', protein: 4, carbs: 25, fats: 1, calories: 120, consumed: false },
            ],
          },
          {
            id: 'opt-pm3-6',
            title: 'Option 6: Outside Emergency (1 Ful Sandwich, 1.5–2 hours before)',
            foods: [
              { id: 'f-pm3-11', name: 'Normal Ful Sandwich (سندوتش فول عادي)', portion: '1 sandwich', icon: 'bread', protein: 9, carbs: 38, fats: 6, calories: 240, consumed: false },
            ],
          },
        ],
      },
      {
        id: 'm-pm-4',
        name: 'Meal 4: عشاء الاستشفاء بعد التمرين (Post-Workout Recovery Dinner)',
        scheduledTime: '09:30 PM',
        order: 4,
        selectedOptionId: 'opt-pm4-1',
        consumed: false,
        notes: 'Post-workout recovery dinner 30–60 min after evening training. High quality protein.',
        foods: [
          { id: 'f-pm4-1', name: 'Scrambled Whole Eggs with 1 tsp butter (بيض مقلي بالسمنة)', portion: '3 whole eggs + 1 tsp butter', icon: 'egg', protein: 19, carbs: 1, fats: 19, calories: 255, consumed: false },
          { id: 'f-pm4-2', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf (or 2 boiled potatoes)', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
          { id: 'f-pm4-3', name: 'Fresh Cucumber & Tomato (طماطم وخيار)', portion: 'Fresh slices', icon: 'salad', protein: 1, carbs: 4, fats: 0, calories: 20, consumed: false },
        ],
        options: [
          {
            id: 'opt-pm4-1',
            title: 'Option 1: 3 Scrambled Eggs + 1 Baladi Loaf (or 2 Boiled Potatoes)',
            foods: [
              { id: 'f-pm4-1', name: 'Scrambled Whole Eggs with 1 tsp butter (بيض مقلي بالسمنة)', portion: '3 whole eggs + 1 tsp butter', icon: 'egg', protein: 19, carbs: 1, fats: 19, calories: 255, consumed: false },
              { id: 'f-pm4-2', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf (or 2 boiled potatoes)', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
              { id: 'f-pm4-3', name: 'Fresh Cucumber & Tomato (طماطم وخيار)', portion: 'Fresh slices', icon: 'salad', protein: 1, carbs: 4, fats: 0, calories: 20, consumed: false },
            ],
          },
          {
            id: 'opt-pm4-2',
            title: 'Option 2: Gebna Areesh (150g) + 1 Baladi Loaf (or 2 Boiled Potatoes)',
            foods: [
              { id: 'f-pm4-4', name: 'Fresh Gebna Areesh (جبنة قريش)', portion: '150g (small full bowl)', icon: 'salad', protein: 27, carbs: 4, fats: 2, calories: 145, consumed: false },
              { id: 'f-pm4-5', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf (or 2 boiled potatoes)', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
              { id: 'f-pm4-6', name: 'Olive Oil & Chopped Veggies (زيت زيتون وطماطم وخيار)', portion: '1 tsp olive oil + salad', icon: 'salad', protein: 1, carbs: 3, fats: 5, calories: 60, consumed: false },
            ],
          },
          {
            id: 'opt-pm4-3',
            title: 'Option 3: Leftover Lunch Protein (Chicken Breast or Meat) + Green Salad',
            foods: [
              { id: 'f-pm4-7', name: 'Leftover Chicken or Meat (فراخ أو لحمة من الغداء)', portion: '1 breast or 2 pieces', icon: 'chicken', protein: 42, carbs: 0, fats: 8, calories: 240, consumed: false },
              { id: 'f-pm4-8', name: 'Baladi Bread or Green Salad (نصف رغيف أو سلطة خضراء)', portion: 'Half loaf or large salad', icon: 'bread', protein: 4, carbs: 25, fats: 1, calories: 125, consumed: false },
            ],
          },
          {
            id: 'opt-pm4-4',
            title: 'Option 4: Ful Medames (1 Medium Bowl) + 1 Baladi Loaf',
            foods: [
              { id: 'f-pm4-9', name: 'Ful Medames with 1 tsp oil & cumin (طبق فول بالزيت)', portion: '1 medium bowl', icon: 'bowl', protein: 15, carbs: 36, fats: 6, calories: 260, consumed: false },
              { id: 'f-pm4-10', name: 'Baladi Loaf (عيش بلدي)', portion: '1 medium loaf', icon: 'bread', protein: 7, carbs: 50, fats: 1, calories: 240, consumed: false },
            ],
          },
          {
            id: 'opt-pm4-5',
            title: 'Option 5: Fast Option (Areesh Sandwich in Baladi Loaf + 250 ml Milk)',
            foods: [
              { id: 'f-pm4-11', name: 'Areesh Sandwich (سندوتش جبنة قريش)', portion: '150g areesh in 1 loaf', icon: 'bread', protein: 32, carbs: 54, fats: 3, calories: 370, consumed: false },
              { id: 'f-pm4-12', name: 'Milk (لبن)', portion: '250 ml', icon: 'shake', protein: 8, carbs: 12, fats: 8, calories: 150, consumed: false },
            ],
          },
          {
            id: 'opt-pm4-6',
            title: 'Option 6: Light / Outside Emergency (White Cheese Sandwich or Potatoes + Milk)',
            foods: [
              { id: 'f-pm4-13', name: 'White Cheese Sandwich or 2 Boiled Potatoes (سندوتش جبنة بيضا أو بطاطس)', portion: '1 sandwich or 2 potatoes', icon: 'bread', protein: 9, carbs: 35, fats: 8, calories: 250, consumed: false },
              { id: 'f-pm4-14', name: 'Milk (لبن)', portion: '250 ml', icon: 'shake', protein: 8, carbs: 12, fats: 8, calories: 150, consumed: false },
            ],
          },
        ],
      },
    ],
  },
];

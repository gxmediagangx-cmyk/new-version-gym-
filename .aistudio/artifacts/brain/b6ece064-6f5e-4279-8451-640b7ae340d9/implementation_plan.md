# Dual Eating Routines, Meal Replacements & Decoupled Nutrition Architecture

An architectural plan to support two dedicated eating routines (Morning Training vs. Evening Training), multiple selectable meal replacement options per meal plus on-the-fly custom additions, a dedicated "Save Today's Meals" day-completion flow, and decoupled Gym vs. Nutrition reports.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following decisions were confirmed by the user in Phase 1:
> - **Routine Switching**: Quick toggle switch at the top of the Meals screen (`[ 🌅 Morning Training ]` | `[ 🌙 Evening Training ]`).
> - **Replacement & Custom Selection**: Radio selection list showing alternatives inside each meal card, paired with an "Add Custom Meal / Off-Menu" button.
> - **Report Separation**: Independent "Export Gym Report" and "Export Nutrition Report" actions, plus an optional combined daily report when both are done. Morning gym workouts will never prematurely finalize or penalize un-eaten meals.

---

## 1. Overview & Core Concept

- **What It Does**:
  1. **Dual Eating Routines**: Allows Osama to toggle seamlessly between a *Morning Training Routine* and an *Evening Training Routine*. Each routine defines 4 scheduled meals with exact timing, macros, and meal names tailored to workout timing.
  2. **Meal Replacements (4–5 Options + Custom)**: Each of the 4 meals presents multiple pre-configured replacement options. Osama can pick any alternative with a single radio tap or input custom off-menu foods.
  3. **Meal Consumption Checkmarks**: Each meal has a clear checkbox to confirm whether it was consumed.
  4. **Save Today's Meals Flow**: A dedicated "Finish Nutrition Day / Save Today's Meals" action that commits the day's intake into history without interfering with workout logs.
  5. **Decoupled Reporting Engine**: Independent report generators for Gym vs. Nutrition, preventing morning workouts from calculating unfinished meals as "skipped".

- **Target Persona & Context**: Osama tracking high-adherence nutrition whether hitting the gym at 08:00 AM or 07:00 PM.
- **Key Value**: Maximum dietary flexibility with zero guesswork, realistic meal replacements, and clean, independent coach-ready reports.

---

## 2. User Experience & Visual Design

### 2.1 The Meals Hub & Routine Switcher
- **Top Segmented Routine Switcher**:
  - Located directly under the Meals header in the natural thumb zone.
  - Two high-contrast segmented buttons:
    - `🌅 Morning Training` (Pre-workout meal early, post-workout breakfast, lunch, dinner).
    - `🌙 Evening Training` (Standard breakfast, lunch, pre-workout energizer, post-workout recovery dinner).
  - Instant transition with active gold accent highlight and smooth tab change.

### 2.2 4-Meal Card Hierarchy & Replacement Selector
- Each of the 4 meal cards displays:
  - **Header**: Meal number, time badge (`08:00 AM`), meal name (e.g., *"Meal 1: Pre-Workout Fuel"*), and overall consumed checkmark.
  - **Active Selection Summary**: Highlights the currently selected option with calculated Calories, Protein, Carbs, and Fats.
  - **Replacements Drawer / Radio List**:
    - Tap to expand/view the 4–5 alternative meal options.
    - Clean radio button list showing food items and macro breakdown for each option.
    - Selecting an option updates the meal's foods and total macros immediately.
  - **Custom / Off-Menu Option Button**:
    - Quick modal or inline form allowing Osama to enter custom food items, portions, and estimated macros if eating off-menu.
    - Automatically selects the custom entry as today's eaten meal.

### 2.3 "Save Today's Meals" & Day Completion
- **Sticky / Bottom Action Bar**:
  - A prominent `"Save Today's Meals"` button at the bottom of the meals screen.
  - When tapped:
    - Confetti celebration and audio feedback.
    - Saves a snapshot to `nutritionLogs` with exact consumed meals and selected options.
    - Marks the nutrition day as completed in history.

### 2.4 Decoupled AI Export Modal
- The top-bar Export modal (`Sparkles` icon) is redesigned into three distinct, dedicated actions:
  1. **🏋️ Copy Gym & Boxing Report**: Contains only gym sessions, sets, weights, reps, volume, and boxing drills. Zero mention of meals.
  2. **🥗 Copy Nutrition Report**: Contains only consumed meals, selected replacement options, macros, water intake, and supplements.
  3. **📋 Copy Combined Daily Report**: Full unified summary for end-of-day reviews.

---

## 3. Key Product Decisions & Trade-Offs

| Decision | Chosen Approach | Rationale | Alternatives Considered |
| :--- | :--- | :--- | :--- |
| **Routine Storage** | Store both Morning and Evening routines in `MealSystem[]` with an active routine flag | Allows Osama to switch routines anytime without losing custom edits or replacement presets | Merging both into a single meal system with duplicate meals (cluttered) |
| **Replacement Model** | First-class `MealOption` schema inside each `Meal` | Keeps each meal cleanly bundled with its 4-5 options and avoids messy data synchronization | Separate standalone meals in an external catalog |
| **Report Generation** | Dedicated export functions (`generateGymReportText` & `generateNutritionReportText`) | Guarantees morning gym reports never show evening meals as "skipped" | Single monolithic export with complex query flags |

---

## 4. Technical Architecture & Data Strategy

### 4.1 System Diagram

```
┌────────────────────────────────────────────────────────────────────────┐
│                          GymApp State Manager                          │
│   (mealSystems, nutritionLogs, workoutLogs, boxingLogs, settings)     │
└───────────────────┬────────────────────────────────┬───────────────────┘
                    │                                │
                    ▼                                ▼
       ┌────────────────────────┐       ┌────────────────────────┐
       │   MealSystemView.tsx   │       │     Navbar / AI Modal  │
       │                        │       │                        │
       │ ┌────────────────────┐ │       │ ┌────────────────────┐ │
       │ │  Routine Switcher  │ │       │ │  Export Gym Report │ │
       │ └──────────┬─────────┘ │       │ ├────────────────────┤ │
       │            ▼           │       │ │  Export Nutrition  │ │
       │ ┌────────────────────┐ │       │ ├────────────────────┤ │
       │ │  4 Meal Cards      │ │       │ │  Export Full Day   │ │
       │ │  - Option Radios   │ │       │ └────────────────────┘ │
       │ │  - Custom Button   │ │       └────────────────────────┘
       │ └──────────┬─────────┘ │
       │            ▼           │
       │ ┌────────────────────┐ │
       │ │ Save Today's Meals │ │
       │ └────────────────────┘ │
       └────────────────────────┘
```

### 4.2 Data Models

```ts
export interface MealOption {
  id: string;
  title: string; // e.g. "Option A: 4 Whole Eggs + Sourdough + Avocado"
  foods: FoodItem[];
  isCustom?: boolean;
}

export interface Meal {
  id: string;
  name: string; // e.g. "Meal 1: Breakfast"
  scheduledTime: string; // e.g. "08:00 AM"
  order: number;
  selectedOptionId: string;
  options: MealOption[];
  consumed: boolean;
  notes?: string;
}

export interface MealSystem {
  id: string; // e.g. 'routine-morning-training' | 'routine-evening-training'
  name: string; // "Morning Training Routine" | "Evening Training Routine"
  description: string;
  isCurrent: boolean;
  targetCalories: number;
  targetProtein: number;
  targetCarbs: number;
  targetFats: number;
  meals: Meal[]; // Exactly 4 meals
  waterCount?: number;
  waterTarget?: number;
  supplements?: SupplementItem[];
}
```

### 4.3 Execution Steps
1. **Types Update (`lib/types.ts`)**: Add `MealOption` and update `Meal` and `MealSystem`.
2. **Data & Storage (`lib/storage.ts`)**: Configure default 4-meal Morning and Evening routines with placeholder replacement options (ready for Osama's exact meal details). Add migration safeguards so user data is preserved.
3. **Export Engine (`lib/export-ai.ts`)**: Implement `generateGymReportText()`, `generateNutritionReportText()`, and update `generateDailyReportText()`.
4. **UI Components (`components/meals/MealSystemView.tsx`)**: Build the routine switcher, option radio selector, custom food modal, and "Save Today's Meals" completion button.
5. **Navbar & Export Dialog (`components/Navbar.tsx`, `components/GymApp.tsx`)**: Update the AI modal with separated Gym and Nutrition export buttons.
6. **Verification**: Run `compile_applet` and `lint_applet` to verify compilation and runtime stability.

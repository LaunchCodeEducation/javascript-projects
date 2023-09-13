const studentsolution = require('../solution.js');

describe ("Loops studio solution", function() {

   let protein, grains, veggies, beverages, desserts;

   beforeAll(async function () {
      protein = studentsolution.protein;
      grains = studentsolution.grains;
      veggies = studentsolution.veggies;
      beverages = studentsolution.beverages;
      desserts = studentsolution.desserts;
   });

   
   it("desserts is initialized", function() {
      expect(desserts).toContain("apple");
      expect(desserts).toContain("banana");
      expect(desserts).toContain("more kale");
      expect(desserts).toContain("ice cream");
      expect(desserts).toContain("chocolate");
      expect(desserts).toContain("kiwi");
      expect(desserts.length).toBe(6);
   });

   it("beverages is initialized", function() {
      expect(beverages).toContain("juice");
      expect(beverages).toContain("milk");
      expect(beverages).toContain("water");
      expect(beverages).toContain("soy milk");
      expect(beverages).toContain("soda");
      expect(beverages).toContain("tea");
      expect(beverages.length).toBe(6);
   });

   it("protein is initialized", function () {
      expect(protein).toContain("chicken");
      expect(protein).toContain("pork");
      expect(protein).toContain("tofu");
      expect(protein).toContain("beef");
      expect(protein).toContain("fish");
      expect(protein).toContain("beans");
      expect(protein.length).toBe(6);
   });

   it("grains is initialized", function() {
      expect(grains).toContain("rice");
      expect(grains).toContain("pasta");
      expect(grains).toContain("corn");
      expect(grains).toContain("potato");
      expect(grains).toContain("quinoa");
      expect(grains).toContain("crackers");
      expect(grains.length).toBe(6);
   });

   it("veggies is initialized", function() {
      expect(veggies).toContain("peas");
      expect(veggies).toContain("green beans");
      expect(veggies).toContain("kale");
      expect(veggies).toContain("edamame");
      expect(veggies).toContain("broccoli");
      expect(veggies).toContain("asparagus");
      expect(veggies.length).toBe(6);
   });

   it("mealAssembly produces proper number and size of meals", function() {
      let testMeals1 = studentsolution.mealAssembly(protein, grains, veggies, beverages, desserts, 6);
      expect(testMeals1.length).toBe(6);
      expect(testMeals1[0].length).toBe(5);
      let testMeals2 = studentsolution.mealAssembly(protein, grains, veggies, beverages, desserts, 3);
      expect(testMeals2.length).toBe(3);
      expect(testMeals2[0].length).toBe(5);
      let testMeals3 = studentsolution.mealAssembly(protein, grains, veggies, beverages, desserts, 4);
      expect(testMeals3.length).toBe(4);
      expect(testMeals3[3].length).toBe(5);
   });

   /// BONUS MISSION TEST ///

   // it("generatePassword returns jumbled words", function() {
   //    expect(studentsolution.generatePassword("LoOt", "oku!")).toEqual("LookOut!");
   // })
});
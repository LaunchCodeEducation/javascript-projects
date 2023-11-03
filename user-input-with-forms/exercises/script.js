//Code Your Solution Below
<html>
    <head>
        <title>Form Example</title>
    </head>
    <body>
        <form action="https://handlers.education.launchcode.org/request-parrot" method="POST">
        <label>Test Name <input type="text" name="testName" value="Moon Shot"/></label>
        <button>Run Simulation</button>
        <label>Test Date<input type="date" name="testDate"/></label>
        <label>Operation Code:
        <select name="rocketType">
            <option value="">* Select One *</option>
            <option value="Brant">Brant</option>
            <option value="Lynx">Lynx</option>
            <option value="Orion">Orion</option>
            <option value="Terrier">Terrier</option>
            </select>
            </label>
            <label>Number of Rocket Boosters <input type="number" name="boosterCount" min="0" max="10"/></label>
            <p>Wind Rating:</p>
            <label>No Wind:<input type="radio" name="windRating" value="0"/></label>
            <label>Mild:<input type="radio" name="windRating" value="10"/></label>
            <label>Strong:<input type="radio" name="windRating" value="20"/></label>
            <label>Use production grade servers <input type="checkbox" name="productionServers"/></label>
        </form>
        </body>
</html>
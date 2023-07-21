import express from "express";
import users from "./users.json" assert { type: "json" };

const app = express();

app.get("/", (req, res) => {
    res.json({
        data: "GET Request",
    })
});

app.post("/", (req, res) => {
    res.json({
        data: "POST Request",
    })
});

app.put("/", (req, res) => {
    res.json({
        data: "PUT Request",
    })
});

app.delete("/", (req, res) => {
    res.json({
        data: "DELETE Request",
    })
});

app.get("/about", (req, res) => {
    res.json({
        data: "About GET",
    })
});


app.get("/user/:id", (req, res) => {
    const { id } = req.params;

    const user = users.filter((user => user.id === +id));

    if (user.length === 0) {
        return res.status(404).json({
            message: "User not found",
        });
    }
    res.json({
        data: user,
    });
});

// Query params is to get search , filter
app.get("/users", (req, res) => {
    const { name, province } = req.query;
    let data = [];

    // request headers
    const { authorization } = req.headers;
    // example if the authorization != fauzan it will forbidden to access resources
    if (authorization != "fauzan") {
        return res.status(403).json({
            message: "Forbidden to access resources",
        });
    }
    // if province and name not null
    if (province && name) {
        // find by province and name
        data = users.filter((user => user.province.includes(province) && user.name.includes(name)
        ));
    } else if (province) {
        // find by province
        data = users.filter((user => user.province.includes(province)));
    } else if (name) {
        // find by name
        data = users.filter((user) => user.name.includes(name))
    } else {
        // get all user data
        data = users;
    }

    // if not found
    if (data.length === 0) {
        return res.status(404).json({
            message: "User not found",
        });
    }

    res.json({
        data: data,
    })
});

// add user
app.post("/users", (req,res)=>{
    const newUser = req.body;

    // generate the id of new user
    const id = users.length +1;
    // add new user to users data
    users.push({
        id,
        ...newUser,
    });

    // Add the headers (custom headers), and will overwrite the current if exist
    res.set("X-Powered-By", "Alfian");
    res.status(201).json({
      data: newUser,
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
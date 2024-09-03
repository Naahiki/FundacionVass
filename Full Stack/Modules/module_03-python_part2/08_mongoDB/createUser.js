// user 1
db.createUser({
    user: "Nahiki",
    pwd: "popo",
    customData: {startDate: new Date()},
    roles: [
        {role: "clusterAdmin", db: "admin"},
        {role: "readAnyDatabase", db: "admin"},
        "readWrite"
    ]
})

// user 2
db.createUser({
    user: "Joni",
    pwd: "popo",
    customData: {startDate: new Date()},
    roles: [
        {role: "clusterAdmin", db: "admin"},
        {role: "readAnyDatabase", db: "admin"},
        "readWrite"
    ]
})
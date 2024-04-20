module.exports = (sequelize, DataTypes) => {

    const Users = sequelize.define("Users", {

        emailAddress: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNUll: true,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        age: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hobbies: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        extroverted_introverted: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        nightowl_earlybird: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        cleanliness: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        extra_information: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        
    });

    return Users;
};

module.exports = (sequelize, DataTypes) => {

    const Posts = sequelize.define("Posts", {

        rent: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pet_friendly: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        floorPlan: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        preferredGender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        extraInformation: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        photo: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
        userID: {
            type: DataTypes.INTEGER
        },

    });

    return Posts;
};

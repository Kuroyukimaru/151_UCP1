module.exports = (sequelize, DataTypes) => {
  const kandang = sequelize.define('kandang', {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nama_hewan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Nama_petugas: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Usia_hewan: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Jenis_hewan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Tahun_lahir: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }, {
    tableName: 'kandang',
    timestamps: false,
    freezeTableName: true
  });

  return kandang;
};
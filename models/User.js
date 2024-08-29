//const { Sequelize, DataTypes } = require('sequelize'); // CommonJS
import { Sequelize, DataTypes, Model } from "sequelize";
import { now } from "sequelize/lib/utils";

// Sequelize의 defaultValue는 Null
class User extends Model {
    static init(sequelize) {
        return super.init(
            {
                // Model attributes are defined here : 시쿨라이저는 
                name: {
                    type: DataTypes.STRING(30),
                    allowNull: false,
                },
                phone: {
                    type: DataTypes.STRING(11)
                },
                email: {
                    type: DataTypes.STRING(100),
                    defaultValue: null
                },
                relationship: {
                    type: DataTypes.STRING(20),
                    defaultValue: null
                },
                created_at: {
                    type: DataTypes.DATE,
                    defaultValue: DataTypes.NOW(),
                    //allowNull: false
                }
            },
            {
                // Other model options go here
                sequelize, // DB연결을 위한 시퀄라이즈
                timestamps: false,
                modelName: 'User', // 시퀄라이즈 모델
                tableName: 'users', // 데이터베이스 테이블 이름 (기본값: 모델이름ㅇ르 s| 복수형)
                paranoid: false,
                charset: "utf8", // 테이블 삭제 후 복구를 원하면 true, 아니라면 false( 삭제날짜를 기록)                                                         )
                collate: "utf_general_cli" // 이모지 삽입을 위해선ㄴ utf8mb4
            },
        );
    }
}


export default User;

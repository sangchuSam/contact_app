//const { Sequelize, DataTypes } = require('sequelize'); // CommonJS
import { Sequelize, DataTypes, Model } from "sequelize";
import { now } from "sequelize/lib/utils";

// Sequelize의 defaultValue는 Null
class Memo extends Model {
    static init(sequelize) {
        return super.init(
            {
                // Model attributes are defined here : 시쿨라이저는 
                name: {
                    type: DataTypes.STRING(100),
                    allowNull: false,
                    
                },
                user_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,

                },
              
                created_at: {
                    type: DataTypes.DATE,
                    defaultValue: Sequelize.NOW,
                    allowNull: false
                }
            },
            {
                // Other model options go here
                sequelize, // DB연결을 위한 시퀄라이즈
                timestamps: false,
                underscored: true,
                modelName: 'Memo', // 시퀄라이즈 모델
                tableName: 'memos', // 데이터베이스 테이블 이름 (기본값: 모델이름을 s| 복수형)
                paranoid: false,
                charset: "utf8mb4", // 테이블 삭제 후 복구를 원하면 true, 아니라면 false( 삭제날짜를 기록)                                                         )
                collate: "utf8mb4_general_ci" // 이모지 삽입을 위해선 utf8mb4 형식
            },
        );
    }
    static associate(db) {
        Memo.belongsTo(db.User, {
            foreignKey: "user_id",
            targetKey: "id"  // Memo 테이블에 추가될 외래 키 이름과 일치시킴
        });
    }
}


export default Memo;

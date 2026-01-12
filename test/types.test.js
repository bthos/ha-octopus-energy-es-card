/**
 * Unit tests for type definitions
 */
import { expect } from '@open-wc/testing';
describe('Type Definitions', () => {
    describe('OctopusConsumptionCardConfig', () => {
        it('accepts valid configuration', () => {
            const config = {
                type: 'custom:octopus-consumption-card',
                entity: 'sensor.octopus_energy_es_test_daily_consumption',
                title: 'Test Card',
                show_comparison: true,
                default_period: 'week',
                chart_type: 'line',
                show_tariff_comparison: false,
                tariff_entry_ids: [],
                show_navigation: true,
            };
            expect(config.type).to.equal('custom:octopus-consumption-card');
            expect(config.entity).to.be.a('string');
        });
        it('allows optional fields', () => {
            const minimalConfig = {
                type: 'custom:octopus-consumption-card',
                entity: 'sensor.octopus_energy_es_test_daily_consumption',
            };
            expect(minimalConfig.entity).to.exist;
            expect(minimalConfig.title).to.be.undefined;
        });
        it('accepts valid period values', () => {
            const configDay = {
                type: 'custom:octopus-consumption-card',
                entity: 'sensor.octopus_energy_es_test_daily_consumption',
                default_period: 'day',
            };
            const configWeek = {
                type: 'custom:octopus-consumption-card',
                entity: 'sensor.octopus_energy_es_test_daily_consumption',
                default_period: 'week',
            };
            const configMonth = {
                type: 'custom:octopus-consumption-card',
                entity: 'sensor.octopus_energy_es_test_daily_consumption',
                default_period: 'month',
            };
            expect(configDay.default_period).to.equal('day');
            expect(configWeek.default_period).to.equal('week');
            expect(configMonth.default_period).to.equal('month');
        });
        it('accepts valid chart types', () => {
            const configLine = {
                type: 'custom:octopus-consumption-card',
                entity: 'sensor.octopus_energy_es_test_daily_consumption',
                chart_type: 'line',
            };
            const configBar = {
                type: 'custom:octopus-consumption-card',
                entity: 'sensor.octopus_energy_es_test_daily_consumption',
                chart_type: 'bar',
            };
            expect(configLine.chart_type).to.equal('line');
            expect(configBar.chart_type).to.equal('bar');
        });
    });
    describe('ConsumptionDataPoint', () => {
        it('has required fields', () => {
            const dataPoint = {
                start_time: '2026-01-01T00:00:00Z',
                end_time: '2026-01-01T01:00:00Z',
                consumption: 1.5,
                cost: 0.15,
            };
            expect(dataPoint.start_time).to.be.a('string');
            expect(dataPoint.end_time).to.be.a('string');
            expect(dataPoint.consumption).to.be.a('number');
            expect(dataPoint.cost).to.be.a('number');
        });
    });
    describe('ComparisonResult', () => {
        it('has required structure', () => {
            const comparison = {
                tariffs: [
                    {
                        entry_id: 'entry_1',
                        name: 'Test Tariff',
                        total_cost: 50.0,
                        energy_cost: 40.0,
                        power_cost: 5.0,
                        management_fee: 3.0,
                        taxes: 2.0,
                        period_breakdown: {
                            p1_consumption: 10.0,
                            p2_consumption: 15.0,
                            p3_consumption: 5.0,
                            p1_percentage: 33.3,
                            p2_percentage: 50.0,
                            p3_percentage: 16.7,
                        },
                    },
                ],
                best_tariff: {
                    entry_id: 'entry_1',
                    name: 'Test Tariff',
                },
                savings: {
                    amount: 5.0,
                    percentage: 10.0,
                },
            };
            expect(comparison.tariffs).to.be.an('array');
            expect(comparison.best_tariff).to.exist;
            expect(comparison.savings).to.exist;
        });
    });
});
//# sourceMappingURL=types.test.js.map